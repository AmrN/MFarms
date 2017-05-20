import feathers from 'feathers-client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import authentication from 'feathers-authentication-client';

const host = 'http://localhost:3030';

export const feathersClient = feathers()
  .configure(hooks())
  .configure(rest(host).fetch(window.fetch.bind(window)))
  .configure(authentication({
    jwtStrategy: 'jwt',
    storage: window.localStorage,
  }));


const constructFormData = (files) => {
  const formData = new FormData();
  Object.keys(files).forEach(f => {
    debugger;
    if (Array.isArray(files[f])) {
      const _files = files[f];
      _files.forEach(_f => {
        formData.append(f, _f, _f.name);
      });
    } else {
      formData.append(f, files[f], files[f].name);
    }
  });

  return formData;
}

const uploadForm = (formData) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3030/upload', true);
  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      // debugger;
      if (xhr.status === 200 || xhr.status === 201) {
        // File(s) uploaded.
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error('Failed to upload'));
      }
    };
    xhr.send(formData);
  })
}

export const addUploadCapabilities = requestHandler => (type, resource, params) => {
  // if (type === 'UPDATE' && resource === 'posts') {
  const files = {};

  if (params.data) {
    Object.keys(params.data).forEach(k => {
      if (k.startsWith('upload_')) {
        const key = k.replace(/^upload_/, '');
        files[key] = params.data[k];
        delete params.data[k];
      }
    });
  }

  if (Object.keys(files).length > 0) {
    // only freshly dropped pictures are instance of File
    // const formerPictures = params.data.pictures.filter(p => !(p instanceof File));
    // debugger;
    // const picture = files[Object.keys(files)[0]]
    const formdata = constructFormData(files);
    return uploadForm(formdata).then(res => {
      const newParams = {
        ...params,
        data: {
          ...params.data,
          ...res,
        }
      };
      return requestHandler(type, resource, newParams);
    });

    // return Promise.all(newPictures.map(convertFileToBase64))
    //   .then(base64Pictures => base64Pictures.map(picture64 => ({
    //     src: picture64,
    //     title: `${params.data.title}`,
    //   })))
    //   .then(transformedNewPictures => requestHandler(type, resource, {
    //     ...params,
    //     data: {
    //       ...params.data,
    //       pictures: [...transformedNewPictures, ...formerPictures],
    //     },
    //   }));
  }
  // }

  return requestHandler(type, resource, params);
};

