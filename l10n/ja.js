OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "このユーザーアカウントは無効です。管理者に連絡してください。",
    "Saved" : "保存しました",
    "Provider" : "プロバイダー",
    "Unknown error, please check the log file for more details." : "不明なエラー、詳細はログファイルを確認してください。",
    "Direct log in" : "ダイレクトログイン",
    "SSO & SAML log in" : "SSO & SAML log in",
    "This page should not be visted directly." : "このページは直接閲覧することはできません。",
    "Provider " : "プロバイダー",
    "X.509 certificate of the Service Provider" : "サービスプロバイダのX.509 証明書",
    "Private key of the Service Provider" : "サービスプロバイダーの秘密鍵",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "このSPによって送信された <samlp:logoutRequest> のnameIDが暗号化されることを示します。",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "このSPによって送信された <samlp:AuthnRequest> メッセージが署名されるかどうかを示します。[SPのメタデータがこの情報を提供する]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "このSPによって送信された  <samlp:logoutRequest> メッセージが署名されるかどうかを示します。",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "このSPによって送信された <samlp:logoutResponse> メッセージが署名されるかどうかを示します。",
    "Whether the metadata should be signed." : "メタデータに署名する必要があるかどうか。",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "このSPによって受信されたSAMLResponse上のNameID要素が存在する必要があることを示します。",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "このSPによって受信されたNameIDが暗号化されるための要件を示します。",
    "Indicates if the SP will validate all received XML." : "SPが受信したすべてのXMLを検証するかどうかを示します。",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL- SAMLデータを小文字で符号化し、ツールキットはデフォルトで大文字を使用します。 署名検証でADFSとの互換性を有効にする。",
    "Attribute to map the UID to." : "UIDをマップする属性。",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "ほかのバックエンドにアカウントが存在する場合のみ、認証を許可します。 （例えば、LDAP）",
    "Attribute to map the displayname to." : "表示名をにマップする属性。",
    "Attribute to map the email address to." : "電子メールアドレスをマップする属性。",
    "Attribute to map the quota to." : "クォータをマップする属性。",
    "Attribute to map the users groups to." : "ユーザーグループをマップする属性。",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "%s デスクトップクライアントにSAML認証を使用する（ユーザーの再認証が必要）",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "IDプロバイダのオプションの表示名（デフォルト： \"SSO＆SAMLログイン\"）",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "複数のユーザーのバックエンド（LDAPなど）の使用を許可する",
    "SSO & SAML authentication" : "SSOとSAML認証",
    "Authenticate using single sign-on" : "シングルサインオンを使用して認証する",
    "Open documentation" : "ドキュメントを開く",
    "Use built-in SAML authentication" : "組み込みのSAML認証を使用する",
    "Use environment variable" : "環境変数を使用する",
    "Global settings" : "グローバル設定",
    "Remove identity provider" : "identity providerを削除する",
    "Add identity provider" : "identity providerを追加する",
    "General" : "一般",
    "Service Provider Data" : "Service Providerデータ",
    "If your Service Provider should use certificates you can optionally specify them here." : "サービスプロバイダが証明書を使用する必要がある場合は、オプションでここで指定することができます。",
    "Show Service Provider settings…" : "サービスプロバイダの設定を表示しています...",
    "Identity Provider Data" : "Identity Providerデータ",
    "Configure your IdP settings here." : "IdP をここで設定します。",
    "Identifier of the IdP entity (must be a URI)" : "IdPエンティティの識別子（URIでなければならない）",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "SPが認証要求メッセージを送信するIdPのURLターゲット",
    "Show optional Identity Provider settings…" : "オプションのIdentity Provider設定を表示する...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL SPがSLO要求を送信するIdPの場所",
    "Public X.509 certificate of the IdP" : "IdPの公開X.509証明書",
    "Attribute mapping" : "属性マッピング",
    "If you want to optionally map attributes to the user you can configure these here." : "オプションで属性をユーザーにマップする場合は、ここでそれらを構成できます。",
    "Show attribute mapping settings…" : "属性マッピングの設定を表示する...",
    "Security settings" : "セキュリティ設定",
    "For increased security we recommend enabling the following settings if supported by your environment." : "セキュリティを強化するため、ご使用の環境でサポートされている場合は、次の設定を有効にすることをお勧めします",
    "Show security settings…" : "セキュリティ設定を表示...",
    "Signatures and encryption offered" : "署名と暗号化を提供",
    "Signatures and encryption required" : "署名と暗号化が必要",
    "Download metadata XML" : "メタデータXMLをダウンロード",
    "Reset settings" : "設定をリセット",
    "Metadata invalid" : "メタデータが無効です",
    "Metadata valid" : "有効なメタデータ",
    "Error" : "エラー",
    "Account not provisioned." : "アカウントがプロビジョニングされていない",
    "Your account is not provisioned, access to this service is thus not possible." : "アカウントにプロビジョニングされていないため、このサービスへのアクセスはできません。",
    "Choose a authentication provider" : "認証プロバイダを選択する"
},
"nplurals=1; plural=0;");
