import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">Στοιχεία επικοινωνίας</h1>

              <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.1368023507875!2d23.54880155085144!3d41.08785752237149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a971f31c4a01bd%3A0x4a58653e32a98d71!2zzpzOsc6-zq_OvM61zrnOvyDPgM69zrXPhc68zrHPhM65zrrPjCDOus6xzrkgz4DOv867zrnPhM65z4PPhM65zrrPjCDOus6tzr3PhM-Bzr8!5e0!3m2!1sen!2sgr!4v1549972375964" width="900" height="300" frameborder="0" allowfullscreen></iframe>
              </p>

              <p>
                <ul>
                  <li><label className="has-text-weight-bold">Τοποθεσία:</label> Νίκου Νικολάου 21, Σέρρες 62124</li>
                  <li><label className="has-text-weight-bold">Τηλέφωνα:</label> 23210.53765</li>
                  <li><label className="has-text-weight-bold">Email:</label> myriobiblos@imsn.gr</li>
                </ul>
              </p>

            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
