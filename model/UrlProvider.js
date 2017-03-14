class UrlProvider{
    static hue(){
        let base = "http://10.0.0.105/api/<api-key>/lights"
        return base.replace("<api-key>", creds.hue)
    }
}