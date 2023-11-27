/* eslint-disable react/prop-types */


export default function TextInput(props) {
  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{props.label}</span>
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="input input-bordered w-full max-w-xs"
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
