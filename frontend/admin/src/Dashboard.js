import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
  <Card style={{ margin: '2em' }}>
    <ViewTitle title="Dashboard" />
    <CardHeader title="Welcome to the administration" />
    <CardText>Lorem ipsum sic dolor amet...</CardText>
  </Card>
);