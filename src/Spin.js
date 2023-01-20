import React from 'react';
import Loader from 'react-loader-spinner'
import {useSelector} from "react-redux";

const Spin = (props) => {

  const spinner = useSelector((state)=> state.appReducer.loading );
  console.log('spinner state -> ', spinner)

  return (
    <div className="loader-styles">
      <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
        visible={spinner}
      />
    </div>
  );
};

export default Spin;
