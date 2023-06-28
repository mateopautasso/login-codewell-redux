function Text({text, color, children}) {
    color === 'lightblue' ? '#86bfd3' : '#013243'
    const styles = {
        fontWeight: '400',
        fontSize: '1.7rem',
        color: color
    }
  return (
    <p style={styles}>{text}{children}</p>
  )
}

export default Text