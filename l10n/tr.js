OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Kullanıcı hesabı devre dışı bırakılmış. Lütfen yöneticiniz ile görüşün.",
    "Saved" : "Kaydedildi",
    "Provider" : "Hizmet sağlayıcı",
    "Unknown error, please check the log file for more details." : "Bilinmeyen bir sorun çıktı. Ayrıntılı bilgi almak için günlük dosyalarına bakabilirsiniz.",
    "Direct log in" : "Doğrudan oturum açma",
    "SSO & SAML log in" : "SSO ve SAML oturum açma",
    "This page should not be visited directly." : "Bu sayfaya doğrudan erişilememelidir.",
    "Provider " : "Hizmet sağlayıcı",
    "X.509 certificate of the Service Provider" : "Hizmet sağlayıcısının X.509 sertifikası",
    "Private key of the Service Provider" : "Hizmet sağlayıcısının kişisel anahtarı",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> NameID değerinin şifrelenmiş olup olmayacağını gösterir.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:AuthnRequest> iletilerinin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur].",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutResponse> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Whether the metadata should be signed." : "Üst verilerin imzalanmasının gerekip gerekmediği.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Response>, <samlp:LogoutRequest> ve <samlp:LogoutResponse> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion>bileşenlerinin şifrelenmiş olup olmayacağını gösterir.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Bu hizmet sağlayıcı tarafından alınan SAMLResponse içindeki zorunlu NameID bileşeninin var olup olmayacağını gösterir.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan zorunlu NameID şifrelenmiş olup olmayacağını gösterir.",
    "Indicates if the SP will validate all received XML." : "Hizmet sağlayıcının alınan tüm XML kodlarını doğrulayacağını gösterir.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS SAML verilerindeki adres kodlamalarını küçük harfler ile yaparken araç büyük harf kullanır. İmza doğrulaması bölümündeki ADFS uyumluluğunu etkinleştirin.",
    "Algorithm that the toolkit will use on signing process." : "İmzalama işleminde araç takımı tarafından kullanılacak algoritma.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Sorgu parametreleri $_SERVER üzerinden alınsın. Bazı SAML sunucuları Tek oturum kapatma istekleri için buna gerek duyar.",
    "Attribute to map the UID to." : "UID değerinin eşleştirileceği öznitelik.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Kimlik yalnız, hesap başka bir arka sistemde varsa (LDAP gibi) doğrulansın",
    "Attribute to map the displayname to." : "Görüntülenecek ad değerinin eşleştirileceği öznitelik.",
    "Attribute to map the email address to." : "E-posta adresi değerinin eşleştirileceği özellik.",
    "Attribute to map the quota to." : "Kime kotası değerinin eşleştirileceği öznitelik.",
    "Attribute to map the users groups to." : "Kulanıcı grupları değerinin eşleştirileceği öznitelik.",
    "Attribute to map the users home to." : "Kullanıcıların ev değerinin eşleştirileceği öznitelik.",
    "Email address" : "E-posta adresi",
    "Encrypted" : "Şifrelenmiş",
    "Entity" : "Varlık",
    "Kerberos" : "Kerberos",
    "Persistent" : "Kalıcı",
    "Transient" : "Geçici",
    "Unspecified" : "Belirtilmemiş",
    "Windows domain qualified name" : "Windows etki alanı tam adı",
    "X509 subject name" : "X509 ögesi adı",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "%s masaüstü istemcileri için SAML kimlik doğrulaması kullanılsın (kullanıcının kimliğini yeniden doğrulaması gerekir)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "İsteğe bağlı olarak görüntülenecek kimlik hizmeti sağlayıcısının adı (varsayılan: \"SSO ve SAML oturum açma\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Birden çok kullanıcı arka yüzü kullanılabilsin (LDAP gibi)",
    "SSO & SAML authentication" : "SSO ve SAML kimlik doğrulaması",
    "Authenticate using single sign-on" : "Bu uygulama, tek oturum açma ile kimlik doğrulaması yapılmasını sağlar.",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Tek Oturum Açma ve SAML uygulaması var olan Tek Oturum Açma uygulamanız ile Nextcloud sunucunuzun bütünleşik çalışmasını sağlar. Ek olarak Kullanıcılarınıza kolaylık sağlamak için (paylaşım sırasında gibi) LDAP kullanıcı hizmeti sağlayıcısını da kullanabilirsiniz.<br>Şu anda aşağıdaki hizmet sağlayıcılar denenmiş ve desteklenmektedir:<br><br>* **SAML 2.0**<br>* OneLogin<br>* Shibboleth<br>* Active Directory Federation Services (ADFS)<br><br>* **Authentication via Environment Variable**<br>* Kerberos (mod_auth_kerb)<br>* Kimlik doğrulamasında ortam değişkeni kullanan diğer hizmet sağlayıcılar<br><br>Teorik olarak bu standartlara uygun diğer hizmet sağlayıcıların da uyumlu olması gerekir. Denememizi istediğiniz diğer uygulamaları bize bildirirseniz seviniriz.",
    "Open documentation" : "Belgeleri aç",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Kopyaya SSO üzerinden erişebilecek bir yönetici kullanıcı yapılandırdığınızdan emin olun. Bundan sonra normal %s hesabınızı kullanarak oturum açabilmeniz için \"%s\" seçeneğini etkinleştirmeniz ya da doğrudan %s adresine gitmeniz gerekir.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you go directly to the URL %s." : "Kopyaya SSO üzerinden erişebilecek bir yönetici kullanıcı yapılandırdığınızdan emin olun. Bundan sonra normal %s hesabınızı kullanarak oturum açabilmeniz için doğrudan %s adresine gitmeniz gerekir.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Kimlik doğrulamasının Nextcloud içindeki SAML hizmet sağlayıcısı mı ortam değişkeni mi kullanılarak mı yapılacağını seçin.",
    "Use built-in SAML authentication" : "İç SAML kimlik doğrulaması kullanılsın",
    "Use environment variable" : "Ortam değişkeni kullanılsın",
    "Global settings" : "Genel ayarlar",
    "Remove identity provider" : "Kimlik hizmeti sağlayıcısını sil",
    "Add identity provider" : "Kimlik hizmeti sağlayıcı ekle",
    "General" : "Genel",
    "Service Provider Data" : "Hizmet sağlayıcı verileri",
    "If your Service Provider should use certificates you can optionally specify them here." : "Hizmet sağlayıcınızın kullandığı sertifikalar varsa buradan isteğinize göre belirtebilirsiniz.",
    "Show Service Provider settings…" : "Hizmet sağlayıcı ayarlarını görüntüle …",
    "Name ID format" : "Ad kodu biçimi",
    "Identity Provider Data" : "Kimlik hizmeti sağlayıcı verileri",
    "Configure your IdP settings here." : "Buradan kimlik hizmeti sağlayıcı ayarlarınızı yapılandırabilirsiniz.",
    "Identifier of the IdP entity (must be a URI)" : "Kimlik hizmeti sağlayıcı varlığının belirteci (bir adres olmalı)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Hizmet sağlayıcının kimlik doğrulama isteği iletisini göndereceği kimlik hizmeti sağlayıcı hedef adresini yazın",
    "Show optional Identity Provider settings…" : "İsteğe bağlı ek kimlik hizmeti sağlayıcı ayarları …",
    "URL Location of the IdP where the SP will send the SLO Request" : "Hizmet sağlayıcının SLO isteğini göndereceği kimlik hizmeti sağlayıcı adresini yazın",
    "URL Location of the IDP's SLO Response" : "Kimlik hizmeti sağlayıcının SLO yanıtı adresi",
    "Public X.509 certificate of the IdP" : "Kimlik hizmeti sağlayıcının herkese açık X.509 sertifikası",
    "Attribute mapping" : "Öznitelik eşleştirme",
    "If you want to optionally map attributes to the user you can configure these here." : "Öznitelikler isteğe bağlı olarak kullanıcı ile buradan eşleştirilebilir.",
    "Show attribute mapping settings…" : "Öznitelik eşleştirme ayarlarını görüntüle …",
    "Security settings" : "Güvenlik ayarları",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Arttırılmış güvenlik için ortamınız tarafından destekleniyorsa şu seçenekleri etkinleştirmeniz önerilir.",
    "Show security settings…" : "Güvenlik ayarlarını görüntüle …",
    "Signatures and encryption offered" : "Önerilen imza ve şifreleme",
    "Signatures and encryption required" : "Gereken imza ve şifreleme",
    "Download metadata XML" : "Üst veri XML dosyasını indir",
    "Reset settings" : "Ayarları sıfırla",
    "Metadata invalid" : "Üst veri geçersiz",
    "Metadata valid" : "Üst veri geçerli",
    "Error" : "Hata",
    "Account not provisioned." : "Hesabınız hazır değil.",
    "Your account is not provisioned, access to this service is thus not possible." : "Hesabınız hazır olmadığından bu hizmeti kullanamazsınız.",
    "Login options:" : "Oturum açma seçenekleri:",
    "Choose a authentication provider" : "Bir kimlik doğrulama hizmeti sağlayıcısı seçin"
},
"nplurals=2; plural=(n > 1);");
