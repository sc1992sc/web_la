
    // Call this code when the page is done loading.
    // $(function () {
    //
    //     // Run a quick encryption/decryption when they click.
    //     $('#testme').click(function () {
    //         // Encrypt with the public key...
    //         var encrypt = new JSEncrypt();
    //         encrypt.setPublicKey($('#pubkey').val());
    //         var encrypted = encrypt.encrypt($('#input').val());
    //         console.log (encrypted);
    //         // Decrypt with the private key...
    //         var decrypt = new JSEncrypt();
    //         decrypt.setPrivateKey($('#privkey').val());
    //         var uncrypted = decrypt.decrypt(encrypted);
    //         console.log (uncrypted);
    //         // Now a simple check to see if the round-trip worked.
    //         if (uncrypted == $('#input').val()) {
    //             alert('It works!!!');
    //         }
    //         else {
    //             alert('Something went wrong....');
    //         }
    //     });
    // });
//    function rsajm(data) {
//        var pubkey='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDWNvp/Aa1Bcelt0TrV1v83jFv6R566Kv1SyqyUJwx03eCZ5ljNda5Ym+s0zEadP9QHCvj2jqiQ1NU4yWgDN2OJtCdE8cc3MXPYNOlOMGDyzp9bqeCxYDBXpMPwyQehYCgqUKAHL3wsTbxJ+9LQe3NWLiWALHYlqivjbauFQJ89vwIDAQAB';
//        var encrypt = new JSEncrypt();
//        encrypt.setPublicKey(pubkey);
//        var encrypted = encrypt.encrypt(data);
//        return encrypted;
//    }

    define(['jsencrypt'],function(jsencrypt){
        var JSEncrypt=jsencrypt.JSEncrypt
        var rsajm=function(data){
            var pubkey='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDWNvp/Aa1Bcelt0TrV1v83jFv6R566Kv1SyqyUJwx03eCZ5ljNda5Ym+s0zEadP9QHCvj2jqiQ1NU4yWgDN2OJtCdE8cc3MXPYNOlOMGDyzp9bqeCxYDBXpMPwyQehYCgqUKAHL3wsTbxJ+9LQe3NWLiWALHYlqivjbauFQJ89vwIDAQAB';
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(pubkey);
            var encrypted = encrypt.encrypt(data);
            return encrypted;
        };
        return rsajm
    })