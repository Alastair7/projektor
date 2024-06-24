function SubmitButton({ onClick }) {
  const handleClick = () => {
    alert("Clicked!");
  };
  return (
    <>
      <button type="button" onClick={onClick}>
        Add
      </button>
    </>
  );
}

export default SubmitButton;
