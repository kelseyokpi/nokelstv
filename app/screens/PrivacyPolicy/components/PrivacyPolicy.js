import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import styles from './styles'
import { COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, GREY_COLOR_CODE, LIGHT_GREY_COLOR_CODE, WHITE_COLOR_CODE } from '../../../utils/constant';

const PrivacyPolicy = (props) => {

    return (
        <View style={[styles.container, { backgroundColor: '#111111' }]}>
            <View style={styles.mainvwe}>
                <View style={styles.headbvw}>
                    <TouchableOpacity onPress={() => props.navtodash()} style={styles.headbackimg}>
                        <Image source={require('../../../assets/header-back-btn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navtodash()} style={styles.headerlogo}>
                        <Image source={require('../../../assets/header-logo.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5.2, }}>
                    <ScrollView>
                        <View style={{ flex: 1 }}>


                            <TouchableOpacity style={{
                                flex:1,justifyContent:'center',
                                justifyContent:'center',alignItems:'center'
                            }} onPress={() => props._handlelinking()}>
                                <Text style={styles.helptxt}> NOKELSTV Privacy Policy </Text>
                            </TouchableOpacity>


                            {/* Linking.openURL(response.data.data.accountLink) */}
                            {/* <View style={styles.definetxtvwe}>
                                <Text style={styles.definetextmainvwe}>1. Definitions</Text>
                                <Text style={styles.dectxt}>
                                    Nokelstv and Series Services Ltd; recognises the importance of your privacy.
                                    This Policy x-rays our privacy practices on our Website (the “Site”) and Mobile Applications.
                                    This Policy also explains what information we collect about our customers and how we use this information.
                                    This Privacy Policy is designed to be read in connection with the Terms of Use of the our Site’s.
                                    By accessing or using our Site, you agree to be bound by the Terms of Use and this Privacy Policy.
                                </Text>
                                <Text style={styles.dectxt}>
                                    For the purposes of clarity, “we,” “us,” “our,” the ”Company,” and ”Nokelstv,”
                                    refers to Nokelstv and Series Services Ltd. The “Services” refers to Nokelstv, a Subscription Video
                                    On Demand platform for watching Nollywood Movies and TV Series. “User,” “customer,” or “subscriber,”
                                    “you” refer to consumers using our services. “Personal Information,” “Personal Data,” or “Data” means
                                    any information that identifies or can be used to identify a user, directly or indirectly,
                                    including, but not limited to, name, email address, mobile number, or IP address.
                                </Text>
                                <View style={styles.viewmargintop}>
                                    <Text style={styles.definetextmainvwe}>2. Data Processing</Text>
                                </View>
                                <Text style={styles.dectxt}>
                                    All information supplied by Users of Nokelstv.com and/or the NokelstvApp as defined under the Terms
                                    of Use is covered by the relevant Laws on Data Protection in force in Canada.
                                </Text>
                                <View style={styles.viewmargintop}>
                                    <Text style={styles.dectxt}>
                                        2 . 1   Voluntarily Submitted Data: When you sign up for Nokelstv, pay for a subscription,
                                        consult with our customer service team, send us an email, post on our blog, comment on
                                        a video, or communicate with us in any way, you are voluntarily giving us information
                                        that we process, including, but not limited to; name, username, email address,mobile
                                        number, IP address, credit card information, bank information, and purchase history.
                                        By submitting this information, you consent to its’ collection, usage, disclosure,
                                        and storage by us, as described in our Terms of Use and in this Privacy Policy.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 2   Automatically Collected Data: When you use the Services or browse one
                                        of our Websites or Mobile Applications, we may collect information about your
                                        visit, your usage of the Services, and/or your web browsing; which may include
                                        your IP address, operating system, device type, operating system, browser ID,
                                        browsing activity, and other information about how you interacted with our
                                        Websites or Mobile Applications. We may collect this information as a part of
                                        log files as well as through the use of cookies or other tracking technologies.
                                        Our use of cookies is discussed more below.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 3   Service Usage Data: We may receive information about how and when you use
                                        Services, store it in log files or other types of files associated with your the
                                        account, and link it to other information we collect about you. This information may
                                        include, for example, your IP address, time, date, browser used, and actions you have
                                        taken within the Website or Mobile Applications. This type of information helps us to
                                        improve our Services for both you and for all of our users.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4   Cookie Data: The Site uses cookies. Cookies are text files containing small
                                        amounts of information which are downloaded to your device when you visit a website.
                                        Cookies are useful because they allow a website to recognize a User’s device.
                                        And, to do a lot of other tasks, you may see examples below. These cookies may allow:
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4 . 1 .  us to remember choices you make to improve your experience (such as your username, age classification,
                                        subscription package and period, where applicable, free trial period, movie player quality preference, session management, and live chats etc.);
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4 . 2 .  Advertising or targeting - third party advertising companies to display
                                        advertisement more relevant to you and your interests. As part of their services, they will
                                        place a separate cookie on your computer to help them precisely target advertising to you.
                                        These third party advertising companies do not collect personally identifiable information and;
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4 . 3 .  Performance - us or/and third party partners collect anonymous information including
                                        but not limited to performance and website improvement. This may include
                                        web analytics, error management and testing designs.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4 . 4 .  Users may choose not to accept cookies, but this may prevent the Site from
                                        functioning properly, or may affect your experience on the Site, or you may not be presented
                                        with relevant advertising. Most browsers are initially set up to accept cookies, but you can
                                        reset your browser to refuse all cookies or to indicate when a cookie is being sent.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        2 . 4 . 5 .  Mobile Application Data: When you use our Mobile Applications,
                                        we may collect certain information in addition to information described elsewhere
                                        in this Policy. For example, the type of device and operating system you use.We may
                                        ask you if you want to receive push notifications. If you have opted in to these
                                        notifications and no longer wish to receive them, you may turn them off through your
                                        device’s operating system. We may use mobile analytics software to better understand
                                        how people use our application. We may collect information about how often you use the
                                        application and other performance data.
                                    </Text>
                                    <Text style={styles.definetextmainvwe}> 3. Use and Disclosure of Personal Information</Text>
                                    <Text style={[styles.dectxt, { paddingTop: 0, paddingTop: 5, lineHeight: 18 }]}>
                                        We process and use your Personal Information in the following ways:
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 1 . For Promotional Purposes: For example, if we collect your Personal Information
                                        when you visit our Website and do not pay for a Subscription, we may send you an email inviting
                                        you to Subscribe. You can stop receiving our promotional emails by following the unsubscribe
                                        instructions included in every email we send, or by adjusting your Marketing Preferences in your
                                        profile. This data is processed under Consent.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 2 . For Billing Purposes:
                                        This includes sending you emails, invoices, receipts, notices of delinquency, and alerting
                                        you if we need a different credit card number. We use third parties for secure credit
                                        card transaction processing, and we send billing information to those third parties to
                                        process your orders and credit card payments.
                                        This data is processed under Contract.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 3 . To Provide and Improve Our Services: This includes, for example, aggregating information
                                        from your use of the Services or visit to our Websites or Mobile Applications and sharing this
                                        information with third parties to improve our Services. This might also include sharing your information
                                        with third parties in order to provide and support our Services. When we do have to share Personal Information
                                        with third parties, we take steps to protect your information by requiring these third parties to enter into a
                                        contract with us that requires them to use the Personal Information we transfer to them in a manner that is
                                        consistent with this policy. This data is processed under Legitimate Interest.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 4 . For Account and Support Communication: For example, we may inform you of
                                        subscription payment successes or failures, password reset attempts,and other
                                        support-related functions. This data is processed under Contract.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 5 . For Platform Alerts: For example, we may inform you of temporary or permanent
                                        changes to our Services,such as pricing changes, planned outages, new features,
                                        version updates, releases, abuse warnings, and changes to our Privacy Policy.
                                        This data is processed under Contract.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 6 . For Legal Purposes: For example, complying with court orders, valid discovery
                                        requests, valid subpoenas, to prosecute and defend a court, arbitration, or similar legal proceeding.
                                        To respond to lawful requests by public authorities, including to meet national security or law
                                        enforcement requirements. To provide information to representatives and advisors, including attorneys
                                        and accountants, to help us comply with legal, accounting, or security requirements.
                                        This data is processed under Legal Obligation.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        3 . 7 . For Transfer Purposes: In the case of a sale, merger, consolidation, liquidation
                                        , reorganization, or acquisition. In that event, any acquirer will be subject to our obligations
                                        under this Privacy Policy, including your rights to access and choice. We will notify you of
                                        the change either by sending you an email or posting a notice on our Website.
                                        This data is processed under Legal Obligation.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 5 }]}> 4. Data Retention</Text>
                                    <Text style={[styles.dectxt, { paddingTop: 5 }]}>
                                        We may retain Personal Information about the User, as long as it is necessary for business and/or legal purposes.
                                        Also, we may retain aggregated anonymous information indefinitely. In addition, we may retain your information
                                        for an additional period as is permitted or required to, among other things, comply with our legal
                                        obligations, resolve disputes, and enforce agreements.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>5. Data Transfer </Text>
                                    <Text style={styles.dectxt}>
                                        The NokelstvApp and @NOKELSTV.COM process information about our Users on servers located in
                                        a number of countries. The Company may also subcontract processing or sharing of information to third parties
                                        located in other countries, other than your home country. Also, such information may be transferred to another
                                        company if to secure the performance of an obligation, for a Legal course and as may be ordered by a Law Court..
                                        Therefore, information may be transferred across international borders outside the country where you use our
                                        services, including to countries that do not have laws providing specific protection for personal data or those
                                        that have different legal rules on data protection. You expressly consent to this.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>6. Data Security </Text>
                                    <Text style={styles.dectxt}>
                                        We transmit and store the information we collect using standard security techniques. However,
                                        given the nature of the Internet and the fact that network security measures are not foolproof,
                                        we cannot guarantee a hundred percent security of such information. Should a security breach occur,
                                        Nokelstv and Series Services Ltd will notify all affected customers as soon as is reasonably
                                        possible, and later file a report with the appropriate authorities on the actions we took.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>7. Other Websites and Links</Text>
                                    <Text style={styles.dectxt}>
                                        Our Websites may contain links to third party websites (“Linked Websites”).This Privacy Policy does
                                        not cover collection or use of information by Linked Websites. We are not responsible for the privacy
                                        practices of Linked Websites. If you have questions about the privacy policies or practices of a Linked
                                        Website; you should contact the web administrator of the site directly.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>8. Juveniles</Text>
                                    <Text style={styles.dectxt}>
                                        Users must be at least 18 years old, or the age of majority in their province, territory or country,
                                        to have our permission to use this Site. Individuals under the age of 18, or applicable age of majority,
                                        may utilize the service only with involvement of a parent or legal guardian, under such person’s account
                                        and otherwise subject to the Site’s Terms of use. Our policy is that we do not knowingly collect, use or
                                        disclose personally identifiable information about minor visitors. Accepting to use the Nokelstv App or
                                        our Website is an express undertaking that you have the requisite age to so do.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>9. Privacy Policy Changes</Text>
                                    <Text style={styles.dectxt}>
                                        We may make changes to this Privacy Policy from time to time, and for any reason, without recourse to you.
                                        You are advised to consult this privacy policy regularly for any changes, as we deem your continued use, following
                                        posting of any amendment, modification or change, approval of all changes.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>10. Your Data Privacy Rights</Text>
                                    <Text style={styles.dectxt}>
                                        10 . 1 .  Voluntarily Submitted Data:
                                        When you sign up for Nokelstv, pay for a subscription, consult with our customer service team,
                                        send us an email, post on our blog, comment on a video, or communicate with us in any way, you are
                                        voluntarily giving us information that we process, including, but not limited to; name, username,
                                        email address, mobile number, IP address, credit card information, bank information, and purchase history.
                                        By submitting this information, you consent to its’ collection, usage, disclosure, and storage by us,
                                        as described in our Terms of Use and in this Privacy Policy.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        10 . 2 .  Right to Rectification:
                                        Users can modify or change their name, email password, and mobile login PIN via their profile.
                                        For all other requests, such as updating email address or mobile number, please contact us at @Nokelstv.com.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        10 . 3 .  Right of Access, Right to Erasure, Right to Restrict Processing:
                                        Users can request access or erasure of their personal information, as well as request restriction on
                                        further processing of their personal information by contacting us at @Nokelstv.com. Please allow up
                                        to 30 days for requests to be processed. Nokelstv and Series Services Ltd reserves the right to charge
                                        a reasonable fee to process excessive or repeat requests.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        10 . 4 .  Right to Withdraw Consent:
                                        Users can stop receiving our promotional emails by following the unsubscribe instructions included in every email we send,
                                        or by adjusting your Marketing Preferences in your profile. Users also have choices with respect to cookies,
                                        as described above. By modifying your browser preferences, you have the choice to accept all cookies,
                                        to be notified when a cookie is set, or to reject all cookies. If you choose to reject all cookies some parts
                                        of our Site may not work properly in your case. You may opt out of interest based advertising from third party
                                        advertising agencies.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        10 . 5 .  Right to lodge a complaint with a supervisory authority:
                                        Should you feel your data privacy rights are not being adequately protected by Nokelstv and Series Services Ltd,
                                        you have the right to lodge a formal complaint with the appropriate supervisory authority.
                                    </Text>
                                    <Text style={[styles.definetextmainvwe, { paddingTop: 8 }]}>11. Contact Us</Text>
                                    <Text style={styles.dectxt}>
                                        If you have questions regarding your data privacy rights, or would like to submit a related data privacy right request, please email us at nokelstvandseries@gmail.com. Please allow up to 30 days for requests to be processed. Nokelstv and Series Services Ltd reserves the right to charge a reasonable fee to process excessive or repeat requests. If you have general questions concerning this Privacy Policy please contact us at: @Nokelstv.tv
                                        +1(204)890-5871
                                        Nokelstv and Series Services Ltd.
                                        1110-20 Garnet Janes Road’
                                        Etobicoke, Canada.
                                    </Text>
                                    <Text style={styles.termsandcon}> Nokelstv Terms of Use</Text>
                                    <Text style={styles.dectxt}>
                                        Welcome to Nokelstv.com (the “Site or application”), owned and operated by Nokelstv and Series Services Ltd
                                        (“NOKELSTV” “we” “our”). We are a company registered in Canada and Wales (company number 07186627), and our address for
                                        correspondence is Nokelstv and Series Services Ltd, 1110-20 Garnet Janes Road Etobicoke, Canada. We are a subscription
                                        service that provides our members (“you” “yourself” “Users”) with access to content including but not limited to access
                                        to motion pictures, television and other audio-visual entertainment (“content”) delivered over the Internet, to Internet enabled devices.
                                    </Text>
                                    <Text style={styles.dectxt}>
                                        These Terms of Use, including our Privacy Policy (the “Terms”) govern your use of our service.
                                        As used in these Terms of Use, “Nokelstv service”, “Nokelstv PLUS”, “Nokelstv+”, “our service”, or “service” means the
                                        subscription service provided by NOKELSTV for discovering and watching the content, including all features and functionality,
                                        the Site, content, application, user interface and software associated with our service.
                                    </Text>
                                    <Text style={styles.termsandcon}> Acceptance of Terms of Use</Text>
                                    <Text style={styles.dectxt}>
                                        By accessing, visiting, using or browsing the NokelstvApp and Website, via this Site or any other device
                                        or application or other technology, you accept and agree to be bound by the Terms contained herein. Please read
                                        carefully. Further, you shall be subject to any additional terms of use that apply when you use certain products
                                        (for example, a voucher) or posted guidelines or rules applicable to our service, which may be posted and modified from
                                        time to time. All such guidelines are hereby incorporated by reference into the Terms.
                                    </Text>
                                    <Text style={[styles.dectxt, { lineHeight: 20 }]}>
                                        ANY ACCESS, USE or PARTICIPATION IN ANY OF THE NOKELSTV SERVICE WILL CONSTITUTE ACCEPTANCE OF THE TERMS.
                                        IF YOU DO NOT AGREE TO THESE TERMS OF USE, PLEASE DO NOT USE ANY OF THE NOKELSTV SERVICES OR OUR SITE OR APPLICATION
                                        OR ACCESS OUR SERVICE.
                                    </Text>
                                    <Text style={styles.termsandcon}>Changes to Terms of Use </Text>
                                    <Text style={styles.dectxt}>
                                        Nokelstv may in its sole discretion, from time to time, change these Terms, at any time without notice.
                                        We may display the changes on this page of the Site or application and such changes shall be effective immediately.
                                    </Text>
                                    <Text style={styles.termsandcon}>Privacy </Text>
                                    <Text style={styles.dectxt}>
                                        Please read our privacy policy here @Nokelstv.com which also governs your use of the Site and application and
                                        our service, to understand our practices.
                                    </Text>
                                    <Text style={styles.termsandcon}>Communications </Text>
                                </View>
                            </View> */}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
export default PrivacyPolicy;