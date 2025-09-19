# Manual configurar github por ssh

## Intalación de la clave en Github
Creo la clave privada como la publica

```bash 
ssh-keygen -t ed25519 -C "ruthfaouzimeira@gmail.com"
```

Muestro el contenido de la clave publica para poder copiarla en Github

```bash
cat ~/.ssh/id_ed25519.pub
```

En Github te vas a settings, de alli nos desplazamos a SSH and GPG keys. Una vez que estamos allí, le damos a new SSH key y ya le pones un titulo y la clave.

![imagen ssh](/img/image.png)


## Añadir la clave a Agent
Desde windows, abrimos el powershell como administrador y ponemos los siguientes comandos para habilitar y arrancar el servicio ssh-agent:

```bash
Get-Service ssh-agent | Set-Service -StartupType Automatic
```

```bash
Start-Service ssh-agent
```

Ahora con esto hecho, nos vamos a Git y añadimos la clave a agente.

```bash
ssh-add ~/.ssh/id_ed25519
```

## Verificar la clave

Ahora para verificar que tenemos la clave ponemos el siguiente comando y si nos saluda, significa que ha funcionado correctamente:

```bash
ssh -T git@github.com
```
