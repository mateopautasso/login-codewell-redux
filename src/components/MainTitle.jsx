function MainTitle({ text, color }) {
    color === 'blue' ? '#013243' : 'white'
    const style = {
        fontSize: '4.5rem',
        fontWeight: '500',
        color: color
    }
    return (
        <h2 style={style}>{text}</h2>
    )
}

export default MainTitle;
