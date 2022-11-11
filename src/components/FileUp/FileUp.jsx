export default function FileUp() {
  const handleClick = () => {
    global.electron.filesUp.openDialog();
  };

  return (
    <>
      <div id="input" className="form-text mb-2">
        We'll never share your password with anyone else.
      </div>
      <button onClick={handleClick} className="btn btn-danger">
        Upload
      </button>
    </>
  );
}
