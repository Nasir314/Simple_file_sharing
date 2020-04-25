import React, { Fragment } from 'react';
import { MDBModal, MDBModalBody, MDBRow, MDBCard, MDBCol } from "mdbreact";
import CustomButton from '../Buttons';
import "./style.css";
import { dummyData } from './constantData';
import AutoSuggestion from '../AutoSuggestions';
import CustomSnackbar from "../../components/snackBar/index";

class SharingSetting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addedMem: [
                {
                    "_id": "5ea341679a57bdc8861fd287",
                    "picture": "https://avatars1.githubusercontent.com/u/481677?v=4",
                    "age": 38,
                    "name": "Irwin Hogan",
                    "company": "MULTRON",
                    "email": "irwin.hogan@multron.ca",
                    "phone": "+1 (870) 587-2025",
                    "isOwner": true
                },
            ],
            dupCheck: [],
            suggData: dummyData,

            showSnackbar: false,
            snackbarVariant: "",
            snakBarMessage: "",
            position: "left",
        }
    }

    fnRemMember = (e, data, ind) => {
        let { addedMem, dupCheck, suggData } = this.state;
        if (ind > -1) {
            addedMem.splice(ind, 1);
        }
        const index = dupCheck.indexOf(data.name);
        if (index > -1) {
            dupCheck.splice(index, 1);
        }
        suggData.push(data);
        this.setState({
            addedMem, dupCheck, suggData,
            showSnackbar: true,
            snackbarVariant: "success",
            snakBarMessage: "Member Removed",
            position: this.state.position,
        })
    }

    fnAddMember = (data) => {
        let { addedMem, dupCheck, suggData } = this.state;
        for (let i = 0; i < suggData.length; i++) {
            if (suggData[i].name === data) {
                if (!dupCheck.includes(data)) {
                    addedMem.push(suggData[i])
                    dupCheck.push(data)
                    if (i > -1) {
                        suggData.splice(i, 1);
                    }
                    this.setState({
                        addedMem, dupCheck, suggData,
                        showSnackbar: true,
                        snackbarVariant: "success",
                        snakBarMessage: "Member added",
                        position: this.state.position,
                    })
                }
                else {
                    this.setState({
                        showSnackbar: true,
                        snackbarVariant: "warning",
                        snakBarMessage: "Member already exist!",
                        position: this.state.position
                    })
                }
            }
        }
    }

    handleSnackBarClose = () => {
        this.setState({
            finalMessage: "",
            showSnackbar: false
        });
    };

    render() {
        return (
            <Fragment>
                <MDBModal isOpen={this.props.issharSettOpen} toggle={() => { }}>
                    <MDBModalBody>
                        <div className="shar_div1">
                            <div style={{ fontSize: "20px", fontWeight: "600" }}>
                                Sharing Settings
                        </div>
                            <div>
                                <CustomButton
                                    handleClick={this.props.fnShareFiles}
                                    icon="fas fa-times"
                                    className="icon-button-custom-red"
                                    title="Close"
                                />
                            </div>
                        </div>
                        <br />

                        <div>
                            Add Member<br />
                            <AutoSuggestion
                                fnAddMember={this.fnAddMember}
                                dummyData={this.state.suggData}
                            />
                            <br />

                            <br />
                            <div className="border-strip"> </div>
                            <br />

                            <div>
                                <div className="shar_own_mem">Owner</div>
                                {
                                    this.state.addedMem.map((data, ind) =>
                                        (data && data.isOwner) ?
                                            <Fragment key={ind}>
                                                <MDBRow >
                                                    <MDBCol xs="2" sm="2" md="1" lg="1" xl="1">
                                                        <img className="shar_img" src={data.picture ? data.picture : ""} />
                                                    </MDBCol>
                                                    <MDBCol style={{ marginLeft: "15px" }}>
                                                        <div style={{ marginTop: "5px" }}>
                                                            <div> {data.name ? data.name : "NA"} </div>
                                                            <div className="shar_div_email"> {data.email ? data.email : "NA"} </div>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <br />
                                            </Fragment>
                                            :
                                            ""
                                    )
                                }

                                <div className="shar_own_mem">Members</div>
                                {
                                    (this.state.addedMem.length === 1 || this.state.addedMem.length === 0) ?
                                        <div className="text-center"> You have not added any member </div>
                                        :
                                        this.state.addedMem.map((data, ind) =>
                                            (data && data.isOwner != true) ?
                                                <Fragment key={ind}>
                                                    <MDBRow style={{ marginBottom: "10px" }}>
                                                        <MDBCol xs="2" sm="2" md="1" lg="1" xl="1">
                                                            <img className="shar_img" src={data.picture ? data.picture : ""} />
                                                        </MDBCol>
                                                        <MDBCol xs="8" sm="8" md="8" lg="8" xl="8" style={{ marginLeft: "15px" }}>
                                                            <div style={{ marginTop: "5px" }}>
                                                                <div> {data.name ? data.name : "NA"} </div>
                                                                <div className="shar_div_email"> {data.email ? data.email : "NA"} </div>
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol style={{ textAlign: "end", marginRight: "-10px" }}>
                                                            <CustomButton
                                                                handleClick={(e) => { this.fnRemMember(e, data, ind) }}
                                                                icon="fas fa-times"
                                                                className="icon-button-custom-black"
                                                                title="Remove member"
                                                            />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </Fragment>
                                                :
                                                "")
                                }
                            </div>
                        </div>
                    </MDBModalBody>
                </MDBModal>

                <CustomSnackbar
                    showSnackbar={this.state.showSnackbar}
                    variant={this.state.snackbarVariant}
                    message={this.state.snakBarMessage}
                    onClose={this.handleSnackBarClose}
                    position={this.state.position}
                />
            </Fragment>
        )
    }
}

export default SharingSetting;