import './boxcolor.css';


function BoxColor({ r, g, b }) {
    const styles = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }

    return (
        <div style={styles} className='box-color'>
        </div>
    )
}

export default BoxColor;