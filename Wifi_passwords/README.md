# Get Stored passwords in target system

This python script once executed on a windows target system will send the stored network passwords via given mail.

## packages used

- [subprocess](https://docs.python.org/3/library/subprocess.html)
- [smtp](https://docs.python.org/3/library/smtplib.html)
- [re](https://docs.python.org/3/library/re.html)

# How to run program

**1.** Fork [this](https://github.com/dscciem/Pentesting-and-Hacking-Scripts) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your-user-name>/Pentesting-and-Hacking-Scripts.git
```

Navigate to the project directory.

```bash
cd Pentesting-and-Hacking-Scripts\Wifi_passwords
```

open wifi-passwords.py file and give your email and password on the send_mail function before running the program on the target system

## To run

```bash
python wifi-passwords.py
```

# Output

open inbox of your given mail to see the output

![](https://i.postimg.cc/HnJhW7FJ/pic.png)
