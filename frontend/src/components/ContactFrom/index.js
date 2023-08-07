import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        service: '',
        phone: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            service,
            phone,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Veuillez renseigner votre nom";
        }
        if (email === '') {
            error.email = "Veuillez renseigner votre email";
        }
        if (service === '') {
            error.service = "Veuillez indiquer un service";
        }
        if (phone === '') {
            error.phone = "Veuillez renseigner votre numéro de téléphone";
        }
        if (events === '') {
            error.events = "Selectionnez un élément";
        }
        if (notes === '') {
            error.notes = "Veuillez renseigner la nature de votre panne";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.phone === '' && error.service === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                service: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            service,
            phone,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Nom"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={phone} onChange={this.changeHandler} type="text" name="phone" placeholder="Téléphone"/>
                            <p>{error.phone ? error.phone : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <select onChange={this.changeHandler} value={service} type="text" name="service" className="form-control">
                                <option>Choisissez un service</option>
                                <option>Diagnostique et entretien</option>
                                <option>Charge et Démarrage</option>
                                <option>Embrayage</option>
                                <option>Moteur</option>
                                <option>Direction et Transmission</option>
                                <option>Suspension</option>
                                <option>Echappement</option>
                            </select>
                            <p>{error.service ? error.service : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Envoyer</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;