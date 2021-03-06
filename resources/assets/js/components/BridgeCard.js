import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

const BridgeCard = (props) => {

  let classImage = '';

  let image = "/images/logo.svg";
  if(props.bridge.icons.length !== 0){
    image = '/assets/' + props.bridge.icons[0].filename;
  }else{
    classImage += 'default-image';
  }

    return (
        <div className="bridge">
          <Link to={'/bridges/' + props.bridge.id + '/delete-confirmation'} className="delete">
            <ReactSVG
              path="/images/close.svg"
            />
          </Link>
          <Link to={ '/bridge/' + props.bridge.id }>
              <img
                  className={classImage}
                  src={image}
                  alt="Bridge Name logo"/>
          </Link>
        </div>
    );
};

BridgeCard.propTypes = {
    bridge: PropTypes.object.isRequired
};

export default BridgeCard;