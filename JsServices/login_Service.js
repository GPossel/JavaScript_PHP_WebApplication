function login(username, password)
{

    // TODO: add php backend
    if(username.value == "user" && password.value == "user")
    {
        // return new page
        // return session
        document.getElementById('messageField').style.cssText += 'color:green;';
        document.getElementById('messageField').innerHTML = 'Login complete!';

        return;
    }

    document.getElementById('messageField').style.cssText += 'color:red';
    document.getElementById('messageField').innerHTML = 'Login failed!';
}