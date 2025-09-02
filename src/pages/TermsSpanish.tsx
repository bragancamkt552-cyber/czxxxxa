import React from 'react';

const TermsFrench = () => {
  const goBack = () => {
    window.location.href = 'https://www.dreamvisionlp.online/gjgkkks-esp/terms';
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #1f2937, #000000, #1f2937)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{ 
        padding: '24px 16px', 
        borderBottom: '1px solid #374151' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#a855f7',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              D
            </div>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>DreamVision</span>
          </div>
          <button 
            onClick={goBack} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1f2937'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <span style={{ fontSize: '18px' }}>←</span>
            <span>Retour</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '48px 24px' 
      }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '32px' 
        }}>
          Conditions d'Utilisation
        </h1>
        
        <div style={{
          backgroundColor: 'rgba(31, 41, 55, 0.5)',
          backdropFilter: 'blur(4px)',
          border: '1px solid #374151',
          borderRadius: '8px',
          padding: '32px'
        }}>
          <section style={{ marginBottom: '32px' }}>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '24px' }}>
              <strong>www.dreamvisionlp.online</strong> a rédigé les présentes Conditions d'utilisation afin de démontrer son engagement ferme quant à l'utilisation que vous pouvez faire des services et informations disponibles sur son site web.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Conditions d'utilisation
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              L'accès à ce site web implique l'acceptation expresse et sans réserve des conditions d'utilisation décrites ci-dessous. Si vous n'acceptez pas ces conditions, veuillez ne pas accéder à ce site web ni l'utiliser.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Les visiteurs ne peuvent utiliser ce site web qu'à des fins légales. Ce site web ne peut être utilisé pour publier, envoyer, distribuer ou diffuser du contenu ou des informations de nature diffamatoire, obscène ou illégale, y compris des informations exclusives appartenant à d'autres personnes ou entreprises, ainsi que des marques déposées ou des informations protégées par le droit d'auteur, sans l'autorisation expresse du titulaire de ces droits. De plus, les visiteurs ne peuvent utiliser ce site web pour obtenir ou divulguer des informations personnelles, y compris les adresses Internet, concernant les utilisateurs.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              <strong>www.dreamvisionlp.online</strong> s'efforce de maintenir la qualité, l'actualité et l'authenticité des informations publiées sur son site web, mais décline toute responsabilité en cas de défaillance du service ou d'inexactitude des informations fournies.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Les utilisateurs ne doivent pas présumer que ces services et informations sont exempts d'erreurs ou adaptés à leurs besoins spécifiques. <strong>www.dreamvisionlp.online</strong> ne s'engage pas à mettre à jour les informations et se réserve le droit de modifier à tout moment les conditions d'utilisation ou les prix des services et produits proposés sur son site web.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              L'accès à ce site web est gratuit. <strong>www.dreamvisionlp.online</strong> peut créer des espaces d'accès exclusifs pour ses clients ou des tiers spécialement autorisés.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              <strong>www.dreamvisionlp.online</strong> peut, à sa seule discrétion et à tout moment, modifier ou désactiver le site web, ainsi que limiter, annuler ou suspendre son utilisation ou son accès. Les présentes Conditions d'utilisation peuvent également être modifiées à tout moment. Veuillez consulter cette page régulièrement et consulter les Conditions en vigueur. Certaines dispositions des présentes Conditions peuvent être remplacées par des conditions expresses ou des mentions légales figurant sur certaines pages de ce site web.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Informations soumises par les utilisateurs et les contributeurs
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Tout matériel, information ou communication transmis, envoyé ou publié sur ce site web sera considéré comme non confidentiel, et <strong>www.dreamvisionlp.online</strong> décline toute responsabilité en cas de violation des droits de ses créateurs. Il est strictement interdit de transmettre, d'échanger ou de publier, via ce site web, tout contenu obscène, diffamatoire ou illégal, ainsi que des textes ou créations de tiers sans l'autorisation de l'auteur. <strong>www.dreamvisionlp.online</strong> se réserve le droit de restreindre l'accès aux informations soumises par des tiers à ses utilisateurs.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              <strong>www.dreamvisionlp.online</strong> peut, sans y être obligé, surveiller, examiner et restreindre l'accès à toute zone du site web où les utilisateurs transmettent et échangent des informations entre eux, y compris, mais sans s'y limiter, les salons de discussion, les centres de messagerie ou autres forums de discussion, et peut supprimer ou refuser l'accès à ces informations ou communications. Cependant, <strong>www.dreamvisionlp.online</strong> n'est pas responsable du contenu des informations échangées entre les utilisateurs, qu'il soit légal ou illégal.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Limitation de responsabilité
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Les contenus sont fournis sur ce site web sans aucune garantie expresse ou implicite de qualité marchande ou d'adéquation à un usage particulier. <strong>www.dreamvisionlp.online</strong> ne saurait en aucun cas être tenu responsable des dommages, y compris les pertes de profits, les interruptions d'activité ou les pertes d'informations résultant de l'utilisation ou de l'impossibilité d'utiliser ces contenus. <strong>www.dreamvisionlp.online</strong> ne garantit pas l'exactitude ni l'exhaustivité des informations, textes, graphiques, liens ou autres éléments contenus dans les supports.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              <strong>www.dreamvisionlp.online</strong> décline toute responsabilité en cas de violation des droits d'auteur résultant des informations, documents et éléments publiés sur ce site web et s'engage à les supprimer dès notification de la violation.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Erreurs
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Les documents, informations, images et graphiques publiés sur ce site web peuvent contenir des inexactitudes techniques ou des erreurs typographiques. <strong>www.dreamvisionlp.online</strong> et/ou ses fournisseurs respectifs ne sauraient en aucun cas être tenus responsables des dommages directs ou indirects résultant de l'impossibilité d'utilisation, de la perte de données ou de profits, résultant de l'accès ou du fonctionnement du site web, des services proposés ou des informations disponibles sur ce site. L'accès aux services, contenus, informations et fonctionnalités de ce site web ne garantit pas leur qualité.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Liens vers des sites web tiers
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Les sites web externes ne sont pas sous le contrôle de <strong>www.dreamvisionlp.online</strong>, qui décline toute responsabilité quant au contenu des autres sites web liés ou accessibles via notre site. <strong>www.dreamvisionlp.online</strong> se réserve le droit de supprimer tout lien ou lien vers d'autres sites web ou services à tout moment. <strong>www.dreamvisionlp.online</strong> ne cautionne aucune entreprise ni aucun produit lié, accessible ou annoncé via notre site web, ni aucune publicité publiée sur celui-ci, et se réserve le droit de publier cet avertissement sur ses sites web chaque fois qu'elle le juge nécessaire.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Droits d'auteur et propriété intellectuelle
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Les documents, contenus et créations de ce site web appartiennent à <strong>www.dreamvisionlp.online</strong> et à ses contributeurs. La paternité du contenu, des documents et des images affichés sur <strong>www.dreamvisionlp.online</strong> est protégée par les lois nationales et internationales. Ils ne peuvent être copiés, reproduits, modifiés, publiés, mis à jour, postés, transmis ou distribués de quelque manière que ce soit sans l'autorisation écrite préalable de <strong>www.dreamvisionlp.online</strong>.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Les images contenues sur ce site web sont incorporées aux présentes à des fins de visualisation uniquement et, sauf autorisation écrite expresse, ne peuvent être ni enregistrées ni téléchargées. Toute reproduction ou stockage de contenus récupérés sur ce service exposera les contrevenants à des sanctions légales.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '16px' }}>
              Le nom <strong>www.dreamvisionlp.online</strong>, son logo, le nom de domaine d'accès à Internet, ainsi que tous les éléments caractéristiques de la technologie développée et présentée ici, sous forme de bases de données, constituent des marques déposées et des droits de propriété intellectuelle privés, et tous les droits découlant de leur enregistrement sont protégés par la loi. Certains droits d'utilisation peuvent être cédés par <strong>www.dreamvisionlp.online</strong> en vertu d'un contrat ou d'une licence spéciale, révocable à tout moment en cas de non-respect de ses conditions.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Les marques déposées de <strong>www.dreamvisionlp.online</strong> ne peuvent être utilisées publiquement qu'avec autorisation expresse. L'utilisation de ces marques à des fins publicitaires et promotionnelles doit être dûment déclarée.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Réclamations pour violation de droits d'auteur
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              <strong>www.dreamvisionlp.online</strong> respecte la propriété intellectuelle d'autrui et demande à ses membres d'en faire autant. Toute violation du droit d'auteur doit être signalée via les canaux de contact répertoriés sur notre site Web et accompagnée de documents et d'informations confirmant la paternité.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7', marginBottom: '16px' }}>
              Contact
            </h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Pour toute question concernant ces Conditions d'Utilisation, veuillez nous contacter à : <strong>contact@dreamvisionlp.online</strong>
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginTop: '24px' }}>
              Ces Conditions d'Utilisation sont juridiquement contraignantes et s'appliquent à tous les utilisateurs du site <strong>https://www.dreamvisionlp.online/</strong>
            </p>
