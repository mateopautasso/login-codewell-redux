function LabelForm({forInput, text}) {
    const styles = {
		width: '100%',
		fontSize: '1.8rem',
		fontWeight: '500',
		marginBottom: '12px',
		color: '#013243'
	}
    return (
        <label style={styles} htmlFor={forInput}>{text}</label>
    )
}

export default LabelForm