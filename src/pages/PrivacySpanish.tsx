import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyFrench: React.FC = () => {
  const goBack = () => {
    window.location.href = 'https://www.dreamvisionlp.online/gjgkkks-esp';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">DreamVision</span>
            </div>
            <button 
              onClick={goBack} 
              className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Politique de Confidentialité</h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 space-y-8">
          <section>
            <p className="text-gray-300 leading-relaxed mb-6">
              Bienvenue sur le site <strong>https://www.dreamvisionlp.online/</strong> (ci-après dénommé le "Site").
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              La protection de vos données personnelles est une priorité pour nous. Cette Politique de Confidentialité décrit comment vos données personnelles sont collectées, utilisées, partagées et protégées lorsque vous utilisez nos produits et services numériques, en conformité avec le Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et la Loi française n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, telle que modifiée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">1. Identification et Coordonnées du Responsable du Traitement</h2>
            <p className="text-gray-300 leading-relaxed">
              Le responsable du traitement des données personnelles collectées via ce Site est : www.dreamvisionlp.online
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pour toute question relative à cette Politique de Confidentialité ou à vos données personnelles, vous pouvez nous contacter via les coordonnées ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Données Personnelles Collectées</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous collectons différentes catégories de données personnelles, selon vos interactions avec notre Site et nos services :
            </p>
            
            <h3 className="text-lg font-semibold text-white mb-2">2.1 Catégories de Données Collectées</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone.</li>
              <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, système d'exploitation, identifiants de session.</li>
              <li><strong>Données de transaction :</strong> informations de paiement (traitées par des tiers sécurisés), historique d'achats.</li>
              <li><strong>Données de navigation :</strong> pages visitées, clics, temps passé sur le Site.</li>
              <li><strong>Données de marketing :</strong> préférences en matière de communication, réponses aux campagnes publicitaires.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">2.2 Sources et Méthodes de Collecte</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Formulaires :</strong> données fournies lors de l'inscription, de l'achat ou du contact via notre Site.</li>
              <li><strong>Cookies et technologies similaires :</strong> données collectées automatiquement lors de votre navigation (voir Section 8).</li>
              <li><strong>Tiers :</strong> données obtenues via des partenaires ou des plateformes publicitaires (avec votre consentement préalable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Finalités et Bases Légales du Traitement</h2>
            <p className="text-gray-300 leading-relaxed">
              Vos données personnelles sont traitées pour les finalités suivantes, conformément aux bases légales définies par le RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Destinataires des Données Personnelles</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vos données personnelles peuvent être partagées avec les catégories de destinataires suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Prestataires de services tiers :</strong> hébergement, traitement des paiements, outils d'analyse, plateformes de marketing.</li>
              <li><strong>Partenaires commerciaux :</strong> uniquement avec votre consentement explicite.</li>
              <li><strong>Autorités compétentes :</strong> en cas d'obligation légale ou pour protéger nos droits.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">4.1 Transferts Internationaux</h3>
            <p className="text-gray-300 leading-relaxed">
              Si vos données sont transférées en dehors de l'Union européenne, nous veillons à ce que des garanties appropriées soient mises en place, telles que des clauses contractuelles types ou des décisions d'adéquation de la Commission européenne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. Durée de Conservation des Données</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités décrites ci-dessus, ou conformément aux exigences légales. Par exemple :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Données de transaction :</strong> conservées pendant 10 ans pour des obligations comptables.</li>
              <li><strong>Données de marketing :</strong> conservées jusqu'à ce que vous retiriez votre consentement.</li>
              <li><strong>Données de navigation :</strong> conservées pendant 13 mois maximum (voir Section 8 sur les cookies).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">6. Droits des Titulaires des Données</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Conformément au RGPD et à la loi française, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles.</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données (sous certaines conditions).</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible par machine.</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes ou à des fins de marketing.</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment, pour les traitements basés sur votre consentement.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Pour exercer vos droits, contactez-nous à : <strong>contact@dreamvisionlp.online</strong>. Vous avez également le droit de déposer une plainte auprès de la CNIL (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">7. Mesures de Sécurité</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation. Ces mesures incluent :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Cryptage des données sensibles.</li>
              <li>Contrôles d'accès stricts.</li>
              <li>Surveillance régulière de nos systèmes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">8. Politique de Cookies et Technologies Similaires</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous utilisons des cookies pour améliorer votre expérience utilisateur. Ces cookies peuvent inclure :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du Site.</li>
              <li><strong>Cookies analytiques :</strong> pour mesurer l'audience et analyser l'utilisation du Site.</li>
              <li><strong>Cookies marketing :</strong> pour personnaliser les publicités.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Vous pouvez gérer vos préférences en matière de cookies via notre bandeau de consentement ou les paramètres de votre navigateur. Pour plus d'informations, consultez notre Politique de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">9. Protection des Enfants</h2>
            <p className="text-gray-300 leading-relaxed">
              Nos services ne sont pas destinés aux enfants de moins de 16 ans. Nous ne collectons pas intentionnellement leurs données personnelles. Si vous pensez qu'un enfant nous a fourni des informations, contactez-nous immédiatement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">10. Modifications de la Politique de Confidentialité</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous nous réservons le droit de modifier cette Politique à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. En cas de changements significatifs, nous vous en informerons par e-mail ou via une notification sur le Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">11. Contact</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pour toute question ou demande concernant cette Politique de Confidentialité, veuillez nous contacter à :
            </p>
            <p className="text-gray-300 leading-relaxed">
              E-mail: <strong>contact@dreamvisionlp.online</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mt-6">
              Cette Politique de Confidentialité est juridiquement contraignante et s'applique à tous les utilisateurs du Site https://www.dreamvisionlp.online/.
            </p>
            <p className="text-gray-300 leading-relaxed">
              En utilisant nos services, vous acceptez les termes de cette Politique.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyFrench;
