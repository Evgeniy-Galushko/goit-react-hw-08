import s from "./ModalAgreement.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ModalAgreement({ isOpen, isClose }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(239, 239, 240, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "wite",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.modal}>
        <p className={s.modalP}>
          USER AGREEMENT <br />
          <br />
          I. GENERAL PROVISIONS <br />
          1.1. This User Agreement(hereinafter referred to as the Agreement)
          applies to the website "__________", located at ___________ 1.2. The
          website "________" (hereinafter referred to as the Website) is the
          property of the legal entity ________________, registered address:
          _______________________ 1.3. This Agreement governs the relationship
          between the Administration of the website "______________"
          (hereinafter referred to as the Website Administration) and the User
          of this Website. 1.4. The Website Administration reserves the right to
          change, add or delete clauses of this Agreement at any time without
          notifying the User. 1.5. Use of the Website by the User constitutes
          acceptance of the Agreement and changes made to this Agreement. 1.6.
          The User is personally responsible for checking this Agreement for
          changes. <br />
          <br />
          II. DEFINITIONS OF TERMS <br />
          2.1. The terms listed below have the following meaning for the
          purposes of this Agreement: 2.1.1 "________" is an Internet resource
          located at the domain name _______________, operating through the
          Internet resource and related services (hereinafter referred to as the
          Site). 2.1.2 "________" is a site containing information about
          Products and/or Services and/or Other valuables for the user, Seller
          and/or Service Provider, allowing the selection, ordering and/or
          purchasing of Products and/or receiving of services. 2.1.3 Site
          Administration are employees authorized to manage the Site, acting on
          behalf of the organization name. 2.1.4 Site User (hereinafter referred
          to as the User) is a person who has access to the Site via the
          Internet and uses the Site. 2.1.5 The Contents of the Site
          (hereinafter referred to as the Contents) are protected results of
          intellectual activity, including the texts of literary works, their
          titles, prefaces, annotations, articles, illustrations, covers,
          musical works with or without text, graphic, text, photographic,
          derivative, composite and other works, user interfaces, visual
          interfaces, trademark names, logos, computer programs, databases, as
          well as the design, structure, selection, coordination, appearance,
          general style and arrangement of this Content, included in the Site
          and other objects of intellectual property, all together and/or
          separately, contained on the site ______________. <br />
          <br />
          III. SUBJECT OF THE AGREEMENT <br />
          3.1. The subject of this Agreement is to provide the User with access
          to the Products and/or services provided on the Site. 3.1.1. The Site
          provides the User with the following types of services: - access to
          electronic content on a paid basis, with the right to purchase
          (download), view content; - access to information about the Product
          and/or service to information about purchasing the Product on a
          paid/free basis; 3.1.2. This Agreement applies to all existing
          (actually functioning) services (services) of the Site, as well as any
          subsequent modifications and additional services (services) that
          appear in the future. 3.1.3. Access to the Site is provided on a paid
          and free basis. 3.1.4. This Agreement is a public offer. By accessing
          the Site, the User is considered to have acceded to this Agreement.
          3.1.5. The use of materials and services of the Site is governed by
          the norms of the current legislation. <br />
          <br />
          IV. RIGHTS AND RESPONSIBILITIES OF THE PARTIES <br />
          4.1. The Site Administration has the right to: 4.1.1. Change the rules
          for using the Site, as well as change the content of this Site.
          Changes come into force from the moment the new version of the
          Agreement is published on the Site. 4.1.2. Delete User accounts.
          4.1.3. Refuse registration without explanation. 4.2. The User has the
          right to: 4.2.1. Use all services available on the Site, as well as
          purchase any Goods and/or Services offered on the Site. 4.2.2. Ask any
          questions related to the services of the Site: by phone:
          ______________; by e-mail: ____________; via the Feedback Form located
          at: _______________ 4.2.3. Use the Site solely for the purposes and in
          the manner stipulated by the Agreement and not prohibited by the
          legislation. 4.2.4. Copying information from the Site is prohibited.
          4.2.5. Require the administration to conceal any information about the
          user. 4.2.6. Use the information on the site for personal
          non-commercial purposes. 4.2.7. Receive access to use the Site after
          meeting the registration requirements. 4.3. The User of the Site
          undertakes to: 4.3.1. Provide, upon request of the Site
          Administration, additional information that is directly related to the
          services provided by this Site. 4.3.2. Respect the property and
          non-property rights of authors and other copyright holders when using
          the Site. 4.3.3. Not take actions that may be considered as violating
          the normal operation of the Site. 4.3.4. Not disseminate any
          confidential information about individuals or legal entities protected
          by the legislation using the Site. 4.3.5. Avoid any actions that may
          result in a violation of the confidentiality of information protected
          by the legislation. 4.3.6. Do not use the Site to distribute
          advertising information, unless with the consent of the Site
          Administration. 4.3.7. Do not use the services for the purpose of: -
          violating the rights of minors and (or) causing them harm in any form.
          - infringing on the rights of minorities. - posing as another person
          or a representative of an organization and (or) community without
          sufficient rights to do so, including for employees of this site. -
          misleading regarding the properties and characteristics of any Product
          from the catalog of the Online Store posted on the Site. - incorrect
          comparison of Products and / or Services, as well as the formation of
          a negative attitude towards persons (not) using certain Products and /
          or services, or condemnation of such persons. - Ensure the accuracy of
          the information provided. - Ensure the safety of personal data from
          access by third parties. - Update the Personal Data provided during
          registration, if they change. 4.4. The User is prohibited from: 4.4.1.
          Using any devices, programs, procedures, algorithms and methods,
          automatic devices or equivalent manual processes to access, acquire,
          copy or monitor the content of the Site. 4.4.2. Disrupting the proper
          functioning of the Site. 4.4.3. Bypassing in any way the navigation
          structure of the Site to obtain or attempt to obtain any information,
          documents or materials by any means that are not specifically provided
          by the services of this Site. 4.4.4. Unauthorized access to the
          functions of the Site, any other systems or networks related to this
          Site, as well as to any services offered on the Site. 4.4.5. Violating
          the security or authentication system on the Site or in any network
          related to the Site. 4.4.6. Performing a reverse lookup, tracking or
          attempting to track any information about any other User of the Site.
          4.4.7. Use the Site and its Content for any purposes prohibited by
          law, as well as incite any illegal activity or other activity that
          violates the rights of the Site or other persons. <br />
          <br />
          V. USE OF THE SITE <br />
          5.1. The Site and the Content included in the Site are owned and
          managed by the Site Administration. 5.2. The Content of the Site may
          not be copied, published, reproduced, transmitted or distributed in
          any way, or posted on the global Internet without the prior written
          consent of the Site Administration. 5.3. The Content of the Site is
          protected by copyright, trademark law, as well as other rights related
          to intellectual property, and unfair competition laws. 5.4. The
          purchase of a Product offered on the Site may require the creation of
          a User account. 5.5. The User is personally responsible for
          maintaining the confidentiality of the account information, including
          the password, as well as for any and all activities carried out on
          behalf of the User of the account. 5.6. The User shall immediately
          notify the Site Administration of any unauthorized use of their
          account or password or any other breach of security. 5.7. The Site
          Administration has the right to unilaterally cancel the User's account
          if it has not been used for more than 36 consecutive calendar months
          without notifying the User. 5.8. This Agreement shall apply to all
          additional terms and conditions for the purchase of Goods and/or the
          provision of services provided on the Site. 5.9. The information
          posted on the Site shall not be construed as a change to this
          Agreement. 5.10. The Site Administration has the right to make changes
          to the list of Goods and services offered on the Site and/or their
          prices at any time without notifying the User. 5.11. The document
          specified in paragraph 5.12 of this Agreement regulates in the
          relevant part and applies to the User's use of the Site: 5.12. Privacy
          Policy: _______________; 5.13. Any of the documents listed in
          paragraph 5.12.1. of this Agreement may be subject to update. Changes
          shall come into force from the moment of their publication on the
          Site. <br />
          <br />
          VI. LIABILITY <br />
          6.1. Any losses that the User may incur in the event of intentional or
          negligent violation of any provision of this Agreement, as well as due
          to unauthorized access to the communications of another User, will not
          be compensated by the Site Administration. 6.2. The Site
          Administration is not responsible for: 6.2.1. Delays or failures in
          the process of performing a transaction that arose due to force
          majeure, as well as any case of malfunctions in telecommunications,
          computer, electrical and other related systems. 6.2.2. Actions of
          transfer systems, banks, payment systems and for delays associated
          with their work. 6.2.3. Proper functioning of the Site, if the User
          does not have the necessary technical means to use it, and does not
          bear any obligations to provide users with such means. <br />
          <br />
          VII. VIOLATION OF THE TERMS OF THE USER AGREEMENT <br />
          7.1. The Site Administration has the right to disclose information
          about the User if the current legislation requires or permits such
          disclosure. 7.2. The Site Administration has the right to terminate
          and (or) block access to the Site without prior notice to the User if
          the User has violated this Agreement or the terms of use of the Site
          contained in other documents, as well as in the event of termination
          of the Site or due to a technical malfunction or problem. 7.3. The
          Site Administration shall not be liable to the User or third parties
          for termination of access to the Site in the event of the User's
          violation of any provision of this Agreement or other document
          containing the terms of use of the Site. 7.4. The Site Administration
          has the right to disclose any information collected about the User of
          this Site if disclosure is necessary in connection with an
          investigation or complaint regarding the illegal use of the Site or to
          establish (identify) the User who may violate or interfere with the
          rights of the Site Administration or the rights of other Users of the
          Site. 7.5. The Site Administration has the right to disclose any
          information about the User that it deems necessary to comply with the
          provisions of current legislation or court decisions, ensure
          compliance with the terms of this Agreement, protect the rights or
          security of the organization, Users. <br />
          <br />
          VIII. DISPUTE RESOLUTION <br />
          8.1. In the event of any disagreements or disputes between the Parties
          to this Agreement, a mandatory condition before going to court is the
          filing of a claim (a written proposal for a voluntary settlement of
          the dispute). 8.2. The recipient of the claim, within 30 calendar days
          from the date of its receipt, shall notify the claimant in writing of
          the results of the consideration of the claim. 8.3. If it is
          impossible to resolve the dispute voluntarily, either Party has the
          right to go to court to protect their rights, which are granted to
          them by the current legislation. 8.4. Any claim regarding the terms of
          use of the Site must be filed within 5 days after the grounds for the
          claim arise, with the exception of the protection of copyright to the
          materials of the Site protected in accordance with the law. In case of
          violation of the terms of this paragraph, any claim shall be dismissed
          by the court. <br />
          <br />
          IX. ADDITIONAL TERMS <br />
          9.1. The Site Administration does not accept counter-proposals from
          the User regarding changes to this User Agreement. 9.2. User reviews
          posted on the Site are not confidential information and may be used by
          the Site Administration without restrictions.
        </p>
        <button className={s.modalButton} type="click" onClick={isClose}>
          I agree
        </button>
      </div>
    </Modal>
  );
}
