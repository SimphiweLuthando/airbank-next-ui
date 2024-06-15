
import {Card, CardBody} from "@nextui-org/react";
import PropTypes from 'prop-types';


function Balance({type, amount, color}) {
  return (
    <Card className="w-full">
      <CardBody>
        <h4 className='font-bold'>{type} Balance</h4>
        <p className={`text-` + color}>R {amount}</p>
      </CardBody>
    </Card>
  )
}

Balance.propTypes = {
    type: PropTypes.string.isRequired,  
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  };



export default Balance