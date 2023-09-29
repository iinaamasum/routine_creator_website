import { Button } from '@material-tailwind/react';
import { Component } from 'react';

class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <Button
          size="sm"
          color="green"
          className="btn btn-success btn-lg"
          onClick={() => window.print()}
        >
          Print
        </Button>
      </div>
    );
  }
}
export default PrintThisComponent;
