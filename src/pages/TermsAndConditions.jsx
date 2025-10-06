import React from 'react';
import { useEffect } from "react";
import img from '../assets/images/terms.png'

const TermsAndConditions = () => {

  useEffect(() => {
    window.scrollTo({top:0, behavior:"smooth"});
  }, []);
  
  return (
    <div className="container mx-auto px-4 lg:px-20 py-10 text-sm md:text-base">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">
        Terms and Conditions
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <img
            src={img}
            alt="Chair and Wooden Panel"
            className="w-3/4 rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <section className="space-y-6">
            <h3 className=" font-bold text-[#9C0300]">
              YOUR USE OF THIS WEBSITE IS GOVERNED BY THESE TERMS & CONDITIONS
            </h3>
            <p>
              These terms and conditions of use ("Terms of Use" or “Terms”) of
              the website http://www.teakheirlooms.com/ (hereinafter referred to
              as “Website”) between Teak Heirlooms, a sole proprietary concern (
              including its successors and assigns) and the users of the Website
              ("You" or "Your" or "Yourself" or "User") describe the terms on
              which Teak Heirlooms offers You access to the Website.
            </p>
            <p>
              IT IS RECOMMENDED THAT YOU READ THESE TERMS & CONDITIONS, AS THEY
              INCLUDE TERMS SUCH AS DATA SHARING, LIMITATIONS OF LIABILITY,
              CHOICE OF FORUM FOR DISPUTES AND OTHER PROVISIONS THAT MAY LIMIT
              YOUR RIGHTS.
            </p>
          </section>

          <section className="space-y-6">
            <p>
              Teak Heirlooms reserves the right to make changes to these Terms &
              Conditions from time to time, and such changes will be effective
              immediately upon being posted on the Website. Each time you use
              the Website, you should review the current Terms & Conditions. You
              can determine when these Terms & Conditions were last revised by
              referring to the "LAST UPDATED" legend at the top of these Terms &
              Conditions.
            </p>
            <p>
              Your continued use of the Website will indicate your acceptance of
              the current Terms & Conditions. If you do not agree to any change
              in the Terms & Conditions then you must immediately stop using the
              Website.
            </p>
          </section>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-10 space-y-6">
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            ACCURACY OF INFORMATION PROVIDED BY YOU
          </h3>
          <p>
            You represent and warrant that any information that is provided by
            you in connection with your use of the Website is true, accurate,
            and complete, and that you will maintain and update such information
            regularly. You agree that if any information provided by you is
            false, inaccurate, obsolete or incomplete, Teak Heirlooms is at
            liberty to terminate your use of the Website.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">YOUR ACCOUNT</h3>
          <p>
            You may be required to register with Teak Heirlooms in order to
            access certain services or areas of the Website. With respect to any
            such registration, Teak Heirlooms is at liberty to refuse usage of a
            particular user name (or e-mail address) that is:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>already in use by someone else;</li>
            <li>that may be construed as impersonating another person;</li>
            <li>that belongs to another person;</li>
            <li>
              that personally identifies you; that violates the intellectual
              property or other rights of any person;
            </li>
            <li>that is offensive;</li>
            <li>
              or for any other reason which Teak Heirlooms deems fit and proper.
            </li>
          </ol>
          <p>
            Your user name and password are for your personal use only. If you
            use the Website, you are responsible for maintaining the
            confidentiality of your account and the password used thereto. You
            hereby agree that you alone shall be responsible for the all
            activities that occur in your account or password.
          </p>
          <p>
            Teak Heirlooms reserves the right to refuse service, terminate
            accounts, remove or edit content, or cancel orders in its sole
            discretion.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">TERMINATION</h3>
          <p>
            Teak Heirlooms reserves its right, without notice, to act at its
            sole discretion in terminating your account or your use of the
            Website, and to block or prevent future access to and use of the
            Website if you violate any of these Terms & Conditions.
          </p>
          <p>
            Upon any such termination, your right to use the Website will
            immediately cease.
          </p>
          <p>
            You agree that any termination of your access to or use of the
            Website may be affected without prior notice, and that Teak
            Heirlooms is at liberty to immediately deactivate or delete your
            password and user name, and all related information and files
            associated with it, and/or bar any further access to such
            information or files.
          </p>
          <p>
            You agree that Teak Heirlooms shall not be liable in any manner to
            you or any third party for any loss that has occurred as a result of
            such termination of your access to the Website or for loss of any
            information or files.
          </p>
          <p>
            Teak Heirlooms shall not be required to make lost information or
            files available to you after any termination.
          </p>
          <p>
            Upon termination, all provisions of these Terms & Conditions which
            are by their nature intended to survive termination, all
            representations and warranties, limitation of liabilities, and all
            indemnities shall survive.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">TRANSACTIONS</h3>
          <p>
            Teak Heirlooms makes available products for purchase through the
            Website, and Teak Heirlooms may use third–party suppliers and
            service providers to enable e–commerce functionality on the Website.
            If you wish to purchase any product made available through the
            Website, you may be asked to supply certain information relevant to
            your transaction, including, without limitation, your credit card
            number, the expiration date of your credit card, One Time Passwords/
            PINs, your billing address, and your shipping information. YOU
            REPRESENT AND WARRANT THAT YOU HAVE THE LEGAL RIGHT TO USE ANY
            DEBIT/ CREDIT CARD(S)/ NET BANKING UTILIZED IN CONNECTION WITH ANY
            TRANSACTION. By submitting such information, you grant to Teak
            Heirlooms the right to provide such information to third parties for
            purposes of facilitating the completion of Transactions initiated by
            you or on your behalf. Verification of information may be required
            prior to the acknowledgment or completion of any Transaction.
          </p>
          <p>
            Descriptions and images of, and references to, third–party products
            or services available in connection with the Website do not imply
            Teak Heirlooms’ endorsement of such third–party products or
            services. All descriptions, images, references, features, content,
            specifications, products and prices of products and services
            described or depicted on the Website are subject to change at any
            time without notice. Certain weights, measures and similar
            descriptions are approximate and are provided for convenience
            purposes only. The inclusion of any products or services on the
            Website at a particular time does not imply or warrant that these
            products or services will be available at any time. It is your
            responsibility to ascertain and obey all applicable local, state,
            national and international laws (including minimum age requirements)
            in regard to the possession, use and sale of any item purchased from
            this Website. By placing an order, you represent that the products
            ordered will be used only in a lawful manner.
          </p>
          <p>
            Teak Heirlooms reserves the right, with or without prior notice:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              to limit the available quantity of or discontinue any product or
              service;
            </li>
            <li>
              to impose conditions on the honouring of any coupon, coupon code,
              promotional code or other similar promotions;
            </li>
            <li>
              to bar any user from making any or all transaction(s); and/or
            </li>
            <li>to refuse to provide any user with any product or service.</li>
            <p>
              You agree to pay all charges that may be incurred by you or on
              your behalf through the Website, at the price(s) in effect when
              such charges are incurred, including, without limitation to all
              shipping and handling charges. In addition, you remain responsible
              for any taxes that may be applicable to your transactions.
            </p>
            <p className="pt-3">
              Nothing on the Website constitutes a binding offer to sell
              products described on the Website or to make such products
              available in your area.
            </p>
            <p>
              Teak Heirlooms reserves the right at any time after receipt of
              your order to accept or decline your order, or any portion
              thereof, at its sole discretion, even after an order confirmation
              is issued or after your credit card/ Net Banking has been charged.
            </p>
            <p>
              The prices displayed on the Website are quoted in INR and must be
              paid in INR. In the event a product is listed at an incorrect
              price, Teak Heirlooms has the right to refuse or cancel orders
              placed for the product listed at the incorrect price, regardless
              of whether the order has been confirmed or your credit card
              charged. If your credit card has already been charged for the
              purchase and your order is cancelled, Teak Heirlooms will issue a
              credit to your credit card account.
            </p>
          </ol>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">COLOURS</h3>
          <p>
            Teak Heirlooms strives to display colours of the products displayed
            on the Website as accurately as possible. However the colours seen
            by you will depend on the system/ screen or monitor being used by
            you. Teak Heirlooms cannot guarantee that colours seen by you will
            be accurate. We encourage you to order fabric and leather swatches
            available on the product pages to see the actual fabric colour,
            texture and feel before ordering the final product. The final
            product will be sent as per the swatch ordered.
          </p>
          <p>
            Teak Heirlooms shall not be liable for any minor variations in the
            fabrics/ leather colour/ touch and feel.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            PRODUCT DESCRIPTIONS, FEATURES AND SPECIFICATIONS
          </h3>
          <p>
            Every effort is taken to ensure that the Products supplied
            correspond as closely as possible to the samples in our stores,
            Website and catalogue, but they may vary due to unique and
            characteristic variations of natural materials. Teak Heirlooms is
            not responsible for any such variations, which add to the unique
            quality of the Product, including but not limited to the following:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Many of our Products are individually hand finished and Product
              colour and shade may vary from one manufacturing batch to another.
              This will be more apparent if orders are placed at different
              times.
            </li>
            <li>There is a 3% allowance on fabric alignment.</li>
            <li>
              All Product measurements are approximate. On Lighting, Furniture
              and Upholstered products, allow +/- 1-2 inch(es) variance on sizes
              stated.
            </li>
            <li>
              Leather is a natural material with unique characteristics such as
              shade variation, random scars and blemishes.
            </li>
            <li>
              We reserve the right to make any changes to the Product
              specifications (external and/or internal) and any other changes
              where necessary.
            </li>
            <li>
              Please check the details of the Products shown in any promotional
              publications or offers before ordering, as these Products may vary
              from the Products shown in the Teak Heirlooms catalogue, Website
              or stores.
            </li>
            <li>
              Product specifications will vary from range to range as reflected
              in the design and price. However, all our Products are
              manufactured to the same high quality standards.
            </li>
          </ol>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            NEWSLETTERS AND COMMUNICATIONS
          </h3>
          <p>
            You hereby expressly agree to receive communications and newsletters
            from Teak Heirlooms by SMS and e-mails. You can unsubscribe /
            opt-out from receiving communications and newsletters from Teak
            Heirlooms at anytime by clicking on the Unsubscribe link given at
            the bottom of the newsletter you receive.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">LIMITATIONS ON QUANTITY</h3>
          <p>
            Teak Heirlooms may not offer additional discounts on large orders of
            a single item or on large orders of many individual items. In
            addition, Teak Heirlooms reserves the right to limit quantities on
            orders placed by the same account, the same debit/credit card, bank
            account or orders that use the same billing and/or shipping address.
            You will be notified if such limits are applied.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            SALES, SHIPPING, AND RETURNS
          </h3>
          <p>
            Teak Heirlooms accepts the following credit cards: Visa, MasterCard,
            and Maestro and American Express (Through PayU Payment gateway). In
            addition to that you could also pay through Net Banking and Bank
            Transfer Option or Cash Deposit Option (Capped at Rs. 10,00,000) in
            our ICICI Bank account. For Cash deposit option above Rs.2,00,000
            you are required to submit a copy of your PAN card as per the
            government regulations. There is no surcharge for using your credit
            card to make purchases. Please provide your exact billing address
            and telephone number (i.e. the address and phone number as per your
            credit card records). Incorrect information will cause a delay in
            processing your order.
          </p>
          <p>
            For a multiple product orders, we will make every attempt to ship
            all products contained in the order at the same time. Products that
            are unavailable at the time of shipping will be shipped as they
            become available, unless you inform us otherwise. You will only be
            charged for products contained in a given shipment, plus any
            applicable shipping charges if the shipping is not free. You will
            only be charged for shipping at the rate quoted to you on your
            purchase receipt. The entirety of this shipping charge may be
            applied to the first product(s) shipped on a multiple shipment
            order.
          </p>
          <p className="pt-4">
            Your receipt of an electronic or other form of order confirmation
            does not signify our acceptance of your order, nor does it
            constitute confirmation of Teak Heirlooms offer to sell. Teak
            Heirlooms reserves the right at any time after receipt of your order
            to accept or decline your order for any reason or to supply less
            than the quantity you ordered of any item. Your orders will be
            shipped as they become available. However, there may be times when a
            product you have ordered is out-of-stock, which will delay
            fulfilling your order. Teak Heirlooms will keep you informed of any
            products that you have ordered that are out-of-stock and unavailable
            for immediate shipment.
          </p>
          <p>
            Teak Heirlooms cannot guarantee when an order will arrive. Consider
            any shipping or transit time offered to you by us only as an
            estimate. Fulfilment mistakes that Teak Heirlooms makes resulting in
            the shipment of incorrect product to you will also be accepted for
            return seven (7) days from the date of delivery of the product. See
            Teak Heirlooms’ Complete Shipping & Return policy for further
            details. When returning products please return unused and with the
            original packaging, The logistics partner(s) reserve the right to
            refuse the pickup of goods which are not packed properly as per the
            guidelines and may get damaged in the reverse transit. You are
            responsible for retaining the original packaging material in good
            condition throughout the warranty period. Any additional packaging
            material sent by Teak Heirlooms for reverse logistics may be
            chargeable further.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">Cancellation policy</h3>
          <p>
            Non Furniture Items: For non furniture items under Rs. 5000, if you
            want to cancel the order, if it is not shipped from our warehouse, a
            cancellation fee of Rs. 500 or the payment gateway charges whichever
            is higher will be levied on you as Cancellation charges. If item has
            been shipped, the order cannot be cancelled unless the item is
            damaged or defective. A replacement or refund for any such defective
            items. within 15 days of the receipt of the product in our warehouse
            will be offer. This means the once the refund is approved, the you
            will get the refund within 15 days in his/ her account.
          </p>
          <p>
            For Sofas and Furniture: Most of the furniture is customized as per
            your specifications.
          </p>
          <p>
            Custom made orders begin production immediately upon placement of
            the order and are built to your specifications. They cannot be
            cancelled, changed, returned or refunded at any time. THERE IS NO
            'CHANGE OF HEART' RETURN/ EXCHANGE POLICY available.
          </p>
          <p>
            We request the customer to personally be present during delivery to
            ensure that they check the furniture at the time of delivery.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            HOLDING COST or DELAYED DELIVERY CHARGES
          </h3>
          <p>
            Beyond the standard delivery timelines, Teak Heirlooms offers an
            additional 2 weeks grace period in the event of your inability to
            accept the order. However, after this 2 week period, a 'Holding
            Cost' or 'Delayed Delivery Cost' will be charged on your total order
            value at a rate determined by Teak Heirlooms. A detailed breakup of
            the Holding Cost or any other additional charges will be sent to
            your e-mail ID.
          </p>
          <p>
            The 'Holding Cost' is calculated at the rate of 5% against the total
            value of the order.
          </p>
          <p>
            Applicable GST for storage/ holding charges will be charged. The
            same policy will also be applicable for partial orders withheld in
            our facility on your request. The 'Holding Cost' have to be paid
            for, before dispatch your order from the Teak Heirlooms warehouse.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">RISK OF LOSS</h3>
          <p>
            The risk of loss and title to products purchased on the Website pass
            to the purchaser upon handing over the same to the
            carrier/transporter. The risk of loss and title of Gift Cards and
            e–Gift Cards passes on to the purchaser upon electronic transmission
            to the recipient or delivery to the carrier/transporter, whichever
            is earlier.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">COMMENTS / FEEDBACK</h3>
          <p>
            Teak Heirlooms welcomes your comments and feedback regarding the
            Website, products and services. Teak Heirlooms does not, however,
            accept confidential or proprietary information. Accordingly, all
            comments, feedback, ideas, suggestions, materials, information,
            product designs or concepts, and other submissions disclosed,
            submitted or offered to Teak Heirlooms using this Website or
            otherwise (collectively, “Comments”) are not confidential and will
            become and remain Teak Heirlooms’ property. The disclosure,
            submission or offer of any Comments will constitute an assignment to
            Teak Heirlooms of all worldwide rights, titles and interests and
            goodwill in the Comments without payment of any compensation.
            Comments submitted by you must not violate any right of any third
            party, and must not contain any libellous, abusive, obscene or
            otherwise unlawful material.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            NO UNLAWFUL OR PROHIBITED USES
          </h3>
          <p>
            The Website may be used only for lawful purposes and is available
            only for your personal, non- commercial use, which shall be limited
            to viewing the Website, purchasing products, providing information
            to the Website, and downloading product information for your
            personal review. You are responsible for your own communications,
            including the transmission, posting, and uploading of information
            and are responsible for the consequences of such communications to
            the Website. Teak Heirlooms specifically prohibits any use of the
            Website, and requires all users to agree not to use the Website, for
            any of the following:
          </p>
          <p>
            Posting any information which is incomplete, false, inaccurate or
            not your own; engaging in conduct that would constitute a criminal
            offense, giving rise to civil liability or otherwise violate any
            city, state, national or international law or regulation that would
            fail to comply with accepted Internet protocol; communicating,
            transmitting, or posting material that is copyrighted, trademarked,
            or otherwise owned by a third party unless you are the copyright or
            trademark owner or have the permission of the owner to post it;
            communicating, transmitting, or posting material that reveals trade
            secrets, unless you own them or have the permission of the owner;
            communicating, transmitting, or posting material that infringes on
            any other intellectual property, privacy or publicity right of
            another; communicating, transmitting, or transferring (by any means)
            information or software derived from the Website to foreign
            countries or certain foreign nations in violation of Indian export
            control laws; attempting to interfere in any way with the Website's
            or Teak Heirlooms’ networks or network security, or attempting to
            use the Website's service to gain unauthorized access to any other
            computer system.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            INTELLECTUAL PROPERTY NOTICE
          </h3>
          <p>
            All content included on the Website, such as text, graphics, logos,
            images, audio clips, video, data, music, software and other material
            (collectively "Content"), is owned or licensed property of Teak
            Heirlooms and is protected by Intellectual Property laws. The
            collection, arrangement, and assembly of all content on the Website
            are the exclusive property of Teak Heirlooms and protected by Indian
            and international Trademark and copyright laws. The Content of the
            Website, and the Website as a whole, is intended solely for
            personal, non- commercial use by the users of the Website. You may
            download, print, post and store selected portions of the Content for
            personal, non- commercial purposes, provided you do not modify or
            alter the Content in any way, or delete or change any copyright or
            trademark notice.
          </p>
          <p>
            Teak Heirlooms and its suppliers and licensors expressly reserve all
            intellectual property rights in all text, programs, products,
            processes, technology, content and other materials that appear on
            the Website. Access to the Website does not confer and shall not be
            considered as conferring upon anyone any license under any of Teak
            Heirlooms’ or any third party’s intellectual property rights.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            LINKS TO THIRD PARTIES’ WEBSITES
          </h3>
          <p>
            The Website may contain links to websites of third parties,
            including social Websites and product manufacturers. Teak Heirlooms
            is not responsible for and has no liability for the functionality,
            actions, inactions, privacy settings, privacy policies, terms and
            conditions and content of any such website. Before enabling any
            sharing functions of the Website to communicate with any such
            website; Teak Heirlooms strongly recommends that you review and
            understand the terms and conditions, privacy policies, settings and
            information sharing functions of each such third party website. The
            links and interactive functionality for third party Websites on the
            Website in no way constitute an endorsement by Teak Heirlooms of
            these third party websites. Other Websites may link to the Website
            with or without our authorization, and we may block any links to or
            from the Website. YOUR USE OF THIRD PARTY WEB Websites AND RESOURCES
            IS AT YOUR OWN RISK.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            DISCLAIMER OF READY TO SHIP PRODUCTS
          </h3>
          <p>
            After your order has been placed, processed and payment approved,
            your product will be dispatched in 48 hours via our 3rd Party
            Logistics, unless otherwise specified.
          </p>
          <p>
            Shipping timeline provided for all the products tagged 'Ready to
            Ship' (ONLY) will have an expediated delivery timeline of 7-10 days
            and this is only an estimation; shipment timing may vary depending
            on the production schedule and logistics schedule. There may be some
            unforeseen circumstances that may lead to delays.
          </p>
          <p>
            All delivery dates, if scheduled, are estimates only. You will be
            notified when the products are dispatched from our warehouse.
          </p>
        </section>
        <section className='space-y-4'>
          <h3 className=" font-bold text-[#9C0300]">
            DISCLAIMERS OF WARRANTIES – GENERAL
          </h3>
          <p>
            While Teak Heirlooms attempts to ensure your access and use of the
            Website is safe, Teak Heirlooms cannot and does not represent or
            warrant that the Website or its server will be error–free,
            uninterrupted, free from unauthorized access (including third party
            hackers or denial of service attacks) or otherwise meet your
            requirements.
          </p>
          <p>
            THE Website AND ALL INFORMATION, CONTENT, MATERIALS AND OTHER
            PRODUCTS, SERVICES AND USER CONTENT INCLUDED ON OR OTHERWISE MADE
            AVAILABLE TO YOU THROUGH THE Website ARE PROVIDED BY TEAK HEIRLOOMS
            ON AN "AS IS," "AS AVAILABLE" BASIS, WITHOUT REPRESENTATIONS OR
            WARRANTIES OF ANY KIND. TEAK HEIRLOOMS MAKES NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF
            THE Website OR THE INFORMATION, THE ACCURACY OR COMPLETENESS OF
            CONTENT, MATERIALS, PRODUCTS, SERVICES OR USER CONTENT INCLUDED ON
            OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE Website OR ITS
            SERVERS, OR THAT EMAILS SENT FROM TEAK HEIRLOOMS ARE FREE OF MALWARE
            OR OTHER HARMFUL COMPONENTS. YOU EXPRESSLY AGREE THAT YOUR USE OF
            THE Website IS AT YOUR SOLE RISK. TEAK HEIRLOOMS WILL NOT BE LIABLE
            FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THE Website OR
            FROM ANY INFORMATION, CONTENT, MATERIALS PRODUCTS (INCLUDING
            SOFTWARE), SERVICES OR USER CONTENT OF ANY KIND ARISING FROM THE USE
            OF THE Website, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT,
            CONSEQUENTIAL, PUNITIVE, DAMAGES, UNLESS OTHERWISE SPECIFIED IN
            WRITING.
          </p>
          <p>
            On the Website, Teak Heirlooms may display names, marks, products,
            advertisements or services of third parties, pop–up texts, or links
            to third party Websites. IN NO EVENT WILL Teak Heirlooms BE LIABLE,
            DIRECTLY OR INDIRECTLY FOR ANY DAMAGE OR LOSS ARISING FROM (either
            directly or indirectly) USE OR ACCESS OF A LINKED Website by you. If
            you decide to follow NY link to such third party Websites, you shall
            be liable to the consequences arising therefrom.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">PRODUCT WARRANTY</h3>
          <p>
            Teak Heirlooms undertakes that the Goods shipped to and for use in
            India are free of material Defects in material.
          </p>
          <p>
            The term “Defects” is defined as imperfection in material or wooden
            frame that will impair the use of the Goods.This product warranty
            does not cover:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              {" "}
              Defects caused by improper product storage, handling, assembly,
              maintenance, or use,
            </li>
            <li>
              {" "}
              Defects occurring to the Goods after purchase due to product
              modification, intentional damage, accident, misuse, abuse, or
              negligence,
            </li>
            <li>
              {" "}
              normal product wear and tear due to age including wearing or
              staining or loosening of fabric or leather or any such material.
            </li>
            <li>Labour or assembly damage</li>
            <li>
              Variations of colour or texture in Goods made of natural materials
              like fabric, leather, wood etc,
            </li>
            <li>
              Commercial use of any Goods (e.g., use in a commercial
              establishment or other setting outside of a personal residential
              setting).
            </li>
          </ol>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            JURISDICTION and APPLICABLE LAWS
          </h3>
          <p>
            The Terms and all transactions entered and the relationship between
            You and Teak Heirlooms and any mutual claims shall be governed in
            accordance with the laws of India. All claims, differences and
            disputes arising under or in connection with or in relation hereto
            the Website, the Terms or any transactions entered into on or
            through the Website shall be subject to the exclusive jurisdiction
            of the courts at Chennai, Tamil Nadu India and You hereby accede to
            and accept the jurisdiction of the aforementioned courts.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">LIMITATION OF LIABILITY</h3>
          <p>
            UNDER NO CIRCUMSTANCES SHALL TEAK HEIRLOOMS OR ANY OF ITS OWNERS,
            EMPLOYEES, REPRESENTATIVES, AGENTS, VENDORS OR SUPPLIERS BE LIABLE
            FOR ANY DIRECT OR INDIRECT LOSSES OR DAMAGES ARISING OUT OF OR IN
            CONNECTION WITH THE USE OF OR INABILITY TO USE THE Website. THIS IS
            A COMPREHENSIVE LIMITATION OF LIABILITY THAT APPLIES TO ALL LOSSES
            AND DAMAGES OF ANY KIND (WHETHER GENERAL, SPECIAL, CONSEQUENTIAL,
            INCIDENTAL, EXEMPLARY OR OTHERWISE, INCLUDING,WITHOUT LIMITATION TO
            LOSS OF DATA, INCOME OR PROFITS), WHETHER IN CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, EVEN IF AN AUTHORIZED REPRESENTATIVE OF TEAK
            HEIRLOOMS HAS BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE
            POSSIBILITY OF SUCH DAMAGES. IF YOU ARE DISSATISFIED WITH THE
            Website OR ANY CONTENT ON THE Website, OR WITH THESE TERMS &
            CONDITIONS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING
            THE Website. YOU ACKNOWLEDGE, BY YOUR USE OF THE Website, YOU ACCEPT
            THE TERMS AND CONDITIONS OF USE OF THE SAME.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">
            INDEMNIFICATION AND DEFENSE OF TEAK HEIRLOOMS
          </h3>
          <p>
            As a condition of the use of the Website, you agree to indemnify and
            hold harmless Teak Heirlooms, and its respective Owners, employees,
            , agents, vendors and suppliers from and against any liabilities,
            losses, investigations or inquiries, claims, suits, damages, costs
            and expenses (including without limitation, reasonable attorneys’
            fees and expenses) (each, a “Claim”) arising out of or otherwise
            relating to your use of the Website.
          </p>
        </section>
        <section className="space-y-4">
          <h3 className=" font-bold text-[#9C0300]">MISCELLANEOUS</h3>
          <p>
            These Terms & Conditions, including policies incorporated herein,
            constitute the entire agreement between you and Teak Heirlooms with
            respect to the Website. These Terms & Conditions supersede all prior
            or contemporaneous communications and proposals, whether electronic,
            oral or written, between you and Teak Heirlooms with respect to the
            Website. No provision of these Terms & Conditions shall be waived
            except pursuant to a written communication executed by the party
            against whom the waiver is sought. No waiver will be applicable
            other than in the specific instance in which it is given.
          </p>
          <p>
            If any provision of these Terms & Conditions is held invalid,
            illegal or unenforceable, the validity, legality and enforceability
            of the remaining provisions will not be affected or impaired.
            Nothing in these Terms & Conditions creates a relationship of agent
            and principal, partners, joint venturers or employer-employee
            between the parties, and no act or obligation of either party will
            in any way bind the other. You may not assign, transfer or divert
            any or all of your rights or obligations under these Terms &
            Conditions
          </p>
          <p>
            You agree that a printed version of these Terms & Conditions and of
            any notice given in electronic form shall be admissible in judicial
            or administrative proceedings based upon or relating to these Terms
            & Conditions to the same extent and subject to the same conditions
            as other business documents and records originally generated and
            maintained in printed form. We will not be responsible for failure
            to fulfil any obligation due to causes beyond our control.
          </p>
        </section>
        <section className='space-y-4'>
          <h3 className=" font-bold text-[#9C0300]">CONTACT US</h3>
          <p>
            If you have any concerns about Teak Heirlooms or your use of the
            Website, please contact us with a detailed description, and we will
            try to resolve it, email: info@teakheirlooms.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
