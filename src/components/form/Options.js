import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const Options = (props) => {

  const styles = {
    div: {
      padding: 10,
    }
  };

  const { data } = props;

  return (
    <div>
      <Paper>
        {data.map(item =>
          <Checkbox style = {styles.div}
            label={item.name}
          />
        )}
        <div style = {styles.div}>
          <RaisedButton
            label="Submit"
            primary={true} />
        </div>
      </Paper>
    </div>
  );
};

export default Options;