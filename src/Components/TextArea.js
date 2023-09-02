import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Tooltip } from 'bootstrap';
import PropTypes from 'prop-types';
function TextArea(props) {
    const [text, setText] = useState("");
    const [active, setActive] = useState(true);
    const [words, setWords] = useState(0);
    const handleTextChange = (event) => {
        if (text.length === 0)
            setWords(0);
        else
            setWords(text.split(" ").length);
        console.log("Text Changed" + event.target.value + " " + event.target.value.length);
        if (text.length - 1 > 0)
            setActive(false);
        else
            setActive(true);
        setText(event.target.value);
    };
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleTitleCase = () => {
        let newText = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        setText(newText);
    };
    const handleCopyText = (event) => {
        navigator.clipboard.writeText(text);
        let tooltip = new Tooltip(event.target, {
            title: "Copied!",
            trigger: "auto",
            placement: "bottom",
        });
        tooltip.show();
    };
    let styling={};
    if(props.mode==='light'){
        styling={
            color:'black',
            backgroundColor:'white'
        }
    }
    else
    {
        styling={
            color:'white',
            backgroundColor:'#042743'
        }
    }
    return (
        <>
            <Form>
                <div className="container" style={styling}>
                    <h3 className="text-center">Enter Text Below</h3>
                    <Form.Group>
                        <Form.Control className="border border mb-4" as="textarea" value={text} onChange={handleTextChange} rows={7} />
                        <div className='container my-2 '  style={styling}>
                            <Button variant="primary" size="sm" className='me-3' onClick={handleUpperClick} disabled={active}>To Uppercase</Button>
                            <Button variant="primary" size="sm" className='me-3' onClick={handleLowerClick} disabled={active}>To Lowercase</Button>
                            <Button variant="primary" size="sm" className='me-3' onClick={handleCopyText} disabled={active}>Copy Text</Button>
                            <Button variant="primary" size="sm" className='me-3' onClick={handleTitleCase} disabled={active}>Title Case</Button>
                        </div>
                    </Form.Group>
                </div >
            </Form>
            <div className="container" style={styling}>
                <h3 className="text-center">Text Summary</h3>
                <p className="text-center">{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            </div>
        </>
    );
}
TextArea.propTypes = {
    mode: PropTypes.string.isRequired,
};
TextArea.defaultProps = {
    mode: "light",
};
export default TextArea;