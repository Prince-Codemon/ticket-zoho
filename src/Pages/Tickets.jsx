import React from 'react'

const Tickets = () => {
        document.title  = "Tickets"
    return (
        <div id="content">
            <div className="boxmenu">
                <h2 className="headline">
                    Tickets (
                    <select style={{ backgroundColor: "white", border: "0px" }}>
                        <option>Open</option>
                        <option>Closed</option>
                        <option>All</option>
                    </select>
                    )
                </h2>
                <div id="tickets">
                    <a href="">#3956 My ON762</a>
                    <a href="">#3950 Strasbourg Handling</a>
                </div>
                <br />
                <button style={{ display: "block", margin: "0px auto", width: "200px" }}>
                    Create new ticket
                </button>
                <p style={{ textAlign: "center", margin: "10px", padding: "0px" }}>or</p>
                <button style={{ display: "block", margin: "0px auto", width: "200px" }}>
                    Start chat
                </button>
            </div>
            <div className="boxcontent">
                <div>
                    <h2 className="headline" style={{ display: "inline-block" }}>
                        #3956 My ON762
                    </h2>
                    <button
                        style={{ float: "right" }}
                        onClick={() => {
                            document.getElementById("reply").style.display =
                                document.getElementById("reply").style.display === "none"
                                    ? "block"
                                    : "none";
                        }}
                    >
                        Reply
                    </button>
                </div>
                <div id="reply" style={{ display: "none" }}>
                    <textarea className="ticketResponder"></textarea>
                    <hr />
                </div>

                <p>
                    <div style={{ color: "gray" }}>
                        Frederik Le Blanch{" "}
                        <span style={{ color: "gray" }}>&lt;blanch@crmnordic.dk&gt;</span>{" "}
                        <div style={{ color: "gray", float: "right" }}>
                            10/01 2023 12:24 PM
                        </div>
                    </div>
                    Hi Hans<br />
                    I can see that we have a technical support team in your area in the start of February, please let me know when you have time for a maintenance visit? You can expect it to take roughly 1 day.<br /><br />
                    Best Regards<br />
                    CRM Nordic ApS Support
                </p>
                <hr />
                <div style={{ color: "gray" }}>
                    Hans Kristensen{" "}
                    <span style={{ color: "gray" }}>&lt;hans@kristensen&gt;</span>{" "}
                    <div style={{ color: "gray", float: "right" }}>10/01 2023 10:24 PM</div>
                </div>
                Hi CRM Nordic ApS support<br />
                The motor in our e-Mini MY Lite is making some uncomfortable sounds, I have reviewed the manual and it suggests to contact you directly. Can you please help us resolve the issue?<br /><br />
                Best Regards<br />
                Hans Kristensen
                <hr />
        </div>
    </div>
    


    )
}

export default Tickets