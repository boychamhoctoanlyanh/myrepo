import React from 'react';
import PageBase from '../components/PageBase';
import Data from '../data';
import Clients from '../components/form/Clients';
import Inbox from '../components/form/Inbox';
import Options from '../components/form/Options';

class FormPage extends React.Component {
  render(){
    return(
    <PageBase title = "Form Page"
      navigation = "Application / Form Page" >
        <div className="row">
          <div className="col-xs-3">
            <Clients data={Data.formPage.clients} />
          </div>
          <div className="col-xs-6">
            {this.props.children}
          </div>
          <div className="col-xs-3">
            <Options data={Data.formPage.options} />
          </div>
        </div>
    </PageBase>
  );
  };
};

export default FormPage;
