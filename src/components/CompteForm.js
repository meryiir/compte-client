import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm() {
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });

  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_BASE_URL}/comptes`, compte, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert('Compte ajouté');
        console.log('Compte créé:', response.data);
        // Réinitialiser le formulaire après succès
        setCompte({ solde: '', dateCreation: '', type: '' });
      })
      .catch(error => console.error('Erreur:', error));
  };

  // ⚠️ PARTIE MANQUANTE - AJOUTEZ TOUT CE QUI SUIT :
  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input
            type="number"
            name="solde"
            className="form-control"
            value={compte.solde}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input
            type="date"
            name="dateCreation"
            className="form-control"
            value={compte.dateCreation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            className="form-select"
            value={compte.type}
            onChange={handleChange}
            required
          >
            <option value="">Choisir un type</option>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;