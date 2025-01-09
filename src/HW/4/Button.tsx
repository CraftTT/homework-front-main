type ButtonPropsType = {
  callBack: () => void;
  name: string;
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  const callBackHandler = () => {
    props.callBack();
  };

  return (
      <button id={'hw04-button'} onClick={callBackHandler}>
        {props.name}
      </button>
  );
};
