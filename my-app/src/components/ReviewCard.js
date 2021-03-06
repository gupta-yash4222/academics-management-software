import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const ReviewCard = (props) => {
    const [favFlag, setFavFlag] = useState(false);
    function handleCardClick() {
        console.log("card clicked");
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body style={{color:"black"}}>
                Added
            </Popover.Body>
        </Popover>
    );



    function addCourseToFav(event) {
        setFavFlag(() => {
            return true;
        });

        //make api request to add current(props.courseID) course to fav
    }

    return (
        <div>
            <Card onClick={handleCardClick} style={{ cursor: "pointer", color: "black" }}>
                <Card.Body >
                    <Card.Title style={{ position: "absolute", top: "10px", left: "20px" }}>{props.reviewID}</Card.Title>
                    <h5>
                        <Badge bg="secondary" style={{ position: "absolute", top: "10px", right: "10px" }}> rating: {props.likes}</Badge>
                    </h5>
                    <br></br>
                    <Card.Text style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                        <h6 style={{ position: "absolute", left: "20px" }}>course content:</h6>
                        <br></br>
                        {
                            props.content
                        }
                    </Card.Text>

                    <OverlayTrigger trigger="click" placement="right" overlay={popover} delay={{ show: 250, hide: 400 }}>
                        <Button variant="success" style={{ position: "absolute", bottom: "10px", right: "10px" }} onClick={addCourseToFav}>Add to favourite</Button>
                    </OverlayTrigger>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;