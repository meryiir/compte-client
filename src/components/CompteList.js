import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteList() {
  const [comptes, setComptes] = useState([]);

  useEffect(() => {
    console.log('🔍 useEffect déclenché - Début du chargement des comptes');
    console.log('📡 URL qui va être appelée:', `${API_BASE_URL}/comptes`);

    axios.get(`${API_BASE_URL}/comptes`, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log('✅ REQUÊTE RÉUSSIE - Données reçues du serveur:');
        console.log('📊 Response complète:', response);
        console.log('🎯 Données (response.data):', response.data);
        console.log('🔢 Type de response.data:', typeof response.data);
        console.log('📈 Nombre de comptes:', response.data.length);
        console.log('🏷️ Statut HTTP:', response.status);

        setComptes(response.data);
      })
      .catch(error => {
        console.error('❌ ERREUR - La requête a échoué:');
        console.error('🚨 Message d\'erreur:', error.message);
        console.error('📡 URL appelée:', error.config?.url);
        console.error('🔧 Méthode HTTP:', error.config?.method);
        console.error('📋 Headers envoyés:', error.config?.headers);
        console.error('⚡ Stack complète:', error);

        if (error.response) {
          console.error('📮 Statut HTTP de l\'erreur:', error.response.status);
          console.error('📄 Données de l\'erreur:', error.response.data);
        }
      });
  }, []);

  console.log('🔄 RENDU DU COMPOSANT - comptes dans le state:', comptes);
  console.log('👥 Nombre de comptes affichables:', comptes.length);

  return (
    <div className="container mt-4">
      <h2>Liste des Comptes {comptes.length > 0 && `(${comptes.length} comptes)`}</h2>

      {comptes.length === 0 ? (
        <div className="alert alert-warning">
          <strong>Aucun compte à afficher</strong>
          <p className="mb-0">Vérifiez la console pour les détails de debug</p>
        </div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Solde</th>
              <th>Date de Création</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {comptes.map(compte => (
              <tr key={compte.id}>
                <td><strong>{compte.id}</strong></td>
                <td>{compte.solde} €</td>
                <td>{compte.dateCreation}</td>
                <td>
                  <span className={`badge ${compte.type === 'COURANT' ? 'bg-primary' : 'bg-success'}`}>
                    {compte.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CompteList;