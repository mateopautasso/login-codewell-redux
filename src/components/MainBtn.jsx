function MainBtn({ text, handleClick }) {
    const style = {
        color: 'White',
        backgroundColor: '#013243',
        cursor: 'pointer',
        border: '1px solid transparent',
        borderRadius: '4px',
        padding: '12px 36px',
        fontWeight: '400',
        fontSize: '2rem',
    }
    return(
        <button style={style} onClick={handleClick}>
            {text}
        </button>
    )
}
export default MainBtn;