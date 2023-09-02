import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

export default function About(props) {
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
        <div className="container my-3" style={styling}>
            <h2 className="text-center my-3" style={styling}>About this App</h2>
            <Accordion>
                <Accordion.Item style={styling}>
                    <Accordion.Header>Text Manipulation</Accordion.Header>
                    <Accordion.Body>
                        Mender has designed a text manipulation tool that allows you to convert text to uppercase, lowercase, and copy text to the clipboard. You can also count the number of words and characters in the text.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </>
    );
}
About.propTypes = {
    mode: PropTypes.string.isRequired,
};
About.defaultProps = {
    mode: "light",
};

