function InputText({typeInput, nameInput, idInput, placeholder, handleChange}) {
  const styles = {
		width: '100%',
		fontSize: '1.7rem',
		fontWeight: '400',
		color: '#013243',
		padding: '12px',
		border: '1px solid grey',
		borderRadius: '4px'
	}
  return (
    <input 
		style={styles}
		type={typeInput}
		name={nameInput}
		id={idInput}
		placeholder={placeholder}
		onChange={handleChange}
		autoComplete="true"
	/>
  )
}

export default InputText