**Introducción**

Las listas de control de acceso (ACL, por sus siglas en inglés *Access Control Lists*) constituyen una herramienta fundamental en la administración y seguridad de redes de datos. Permiten controlar el flujo de tráfico que entra o sale de las interfaces de un router, filtrando paquetes con base en criterios definidos por el administrador. Las ACL estándar filtran únicamente por dirección IP de origen, mientras que las extendidas permiten un control más granular al considerar también la dirección destino, protocolo, puertos de origen y destino, entre otros parámetros (Molina, 2015).

El presente documento describe el procedimiento paso a paso para configurar y verificar ACL estándar numeradas y con nombre sobre una topología de red compuesta por tres routers (R1, ISP, R3), dos switches (S1, S3) y dos equipos finales (PC-A, PC-C), de acuerdo con la tabla de direccionamiento proporcionada.

## Parte 1: Establecer la topología e inicializar los dispositivos

**Paso 1. Construir la topología en Cisco Packet Tracer**

Se abre Cisco Packet Tracer y se ubican los dispositivos en el área de trabajo de acuerdo con la topología indicada:

- Tres routers modelo 1941 o equivalente: R1, ISP y R3.
- Dos switches modelo 2960: S1 y S3.
- Dos equipos finales: PC-A (conectado a S1) y PC-C (conectado a S3).

Las conexiones se realizan con los tipos de cable adecuados:

- Cable serial DCE/DTE entre R1 (S0/0/0 DCE) e ISP (S0/0/0), y entre ISP (S0/0/1 DCE) y R3 (S0/0/1).
- Cable cruzado o directo (según el emulador) entre routers y switches: R1 (G0/1) → S1 (F0/5), R3 (G0/1) → S3 (F0/5).
- Cable recto entre switches y PCs: S1 (F0/6) → PC-A, S3 (F0/18) → PC-C.
- Interfaz de loopback Lo0 configurada en cada router según la tabla de direccionamiento.

**Paso 2. Inicializar y reiniciar los dispositivos a configuración predeterminada**

Antes de configurar los dispositivos se eliminan configuraciones previas para partir desde un estado limpio. En cada router y switch se ejecutan los siguientes comandos:

```
Router> enable
Router# erase startup-config
Router# reload
```

En los switches, adicionalmente se elimina el archivo de VLANs:

```
Switch# delete vlan.dat
Switch# reload
```

Al reiniciar, se responde **no** a las preguntas de guardado de configuración y **no** al asistente de configuración inicial (*Would you like to enter the initial configuration dialog?*).

## Parte 2: Configurar los dispositivos y verificar la conectividad

**Paso 1. Configurar el router R1**

Se asignan nombre, contraseñas, interfaces y loopback de acuerdo con la tabla de direccionamiento:

```
Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# no ip domain-lookup
R1(config)# enable secret class
R1(config)# line console 0
R1(config-line)# password cisco
R1(config-line)# login
R1(config-line)# logging synchronous
R1(config-line)# exit
R1(config)# line vty 0 4
R1(config-line)# password cisco
R1(config-line)# login
R1(config-line)# exit
R1(config)# interface gigabitethernet 0/1
R1(config-if)# ip address 192.168.10.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# interface loopback 0
R1(config-if)# ip address 192.168.20.1 255.255.255.0
R1(config-if)# exit
R1(config)# interface serial 0/0/0
R1(config-if)# ip address 10.1.1.1 255.255.255.252
R1(config-if)# clock rate 128000
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# end
R1# copy running-config startup-config
```

**Paso 2. Configurar el router ISP**

```
Router(config)# hostname ISP
ISP(config)# no ip domain-lookup
ISP(config)# enable secret class
ISP(config)# interface serial 0/0/0
ISP(config-if)# ip address 10.1.1.2 255.255.255.252
ISP(config-if)# no shutdown
ISP(config-if)# exit
ISP(config)# interface serial 0/0/1
ISP(config-if)# ip address 10.2.2.2 255.255.255.252
ISP(config-if)# clock rate 128000
ISP(config-if)# no shutdown
ISP(config-if)# exit
ISP(config)# interface loopback 0
ISP(config-if)# ip address 209.165.200.225 255.255.255.224
ISP(config-if)# exit
ISP(config)# end
ISP# copy running-config startup-config
```

**Paso 3. Configurar el router R3**

```
Router(config)# hostname R3
R3(config)# no ip domain-lookup
R3(config)# enable secret class
R3(config)# line console 0
R3(config-line)# password cisco
R3(config-line)# login
R3(config-line)# logging synchronous
R3(config-line)# exit
R3(config)# line vty 0 4
R3(config-line)# password cisco
R3(config-line)# login
R3(config-line)# exit
R3(config)# interface gigabitethernet 0/1
R3(config-if)# ip address 192.168.30.1 255.255.255.0
R3(config-if)# no shutdown
R3(config-if)# exit
R3(config)# interface loopback 0
R3(config-if)# ip address 192.168.40.1 255.255.255.0
R3(config-if)# exit
R3(config)# interface serial 0/0/1
R3(config-if)# ip address 10.2.2.1 255.255.255.252
R3(config-if)# no shutdown
R3(config-if)# exit
R3(config)# end
R3# copy running-config startup-config
```

**Paso 4. Configurar los switches S1 y S3**

En S1:

```
Switch(config)# hostname S1
S1(config)# no ip domain-lookup
S1(config)# enable secret class
S1(config)# interface vlan 1
S1(config-if)# ip address 192.168.10.11 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit
S1(config)# ip default-gateway 192.168.10.1
S1(config)# end
S1# copy running-config startup-config
```

En S3 (misma estructura con dirección de S3):

```
Switch(config)# hostname S3
S3(config)# interface vlan 1
S3(config-if)# ip address 192.168.30.11 255.255.255.0
S3(config-if)# no shutdown
S3(config-if)# exit
S3(config)# ip default-gateway 192.168.30.1
S3(config)# end
S3# copy running-config startup-config
```

**Paso 5. Configurar los equipos finales**

En PC-A se asigna la siguiente configuración de red:
- Dirección IP: 192.168.10.3
- Máscara de subred: 255.255.255.0
- Puerta de enlace predeterminada: 192.168.10.1

En PC-C:
- Dirección IP: 192.168.30.3
- Máscara de subred: 255.255.255.0
- Puerta de enlace predeterminada: 192.168.30.1

**Paso 6. Configurar rutas estáticas para conectividad completa**

En R1 se configura una ruta por defecto hacia ISP:

```
R1(config)# ip route 0.0.0.0 0.0.0.0 10.1.1.2
```

En ISP se configuran rutas estáticas hacia las redes de R1 y R3:

```
ISP(config)# ip route 192.168.10.0 255.255.255.0 10.1.1.1
ISP(config)# ip route 192.168.20.0 255.255.255.0 10.1.1.1
ISP(config)# ip route 192.168.30.0 255.255.255.0 10.2.2.1
ISP(config)# ip route 192.168.40.0 255.255.255.0 10.2.2.1
```

En R3 se configura una ruta por defecto hacia ISP:

```
R3(config)# ip route 0.0.0.0 0.0.0.0 10.2.2.2
```

**Paso 7. Verificar la conectividad entre dispositivos**

Desde PC-A se realizan pruebas de conectividad con `ping` hacia los destinos principales:

```
C:\> ping 192.168.10.1     (puerta de enlace R1 G0/1)
C:\> ping 192.168.20.1     (loopback R1)
C:\> ping 10.1.1.2         (ISP S0/0/0)
C:\> ping 209.165.200.225  (loopback ISP)
C:\> ping 192.168.30.3     (PC-C)
```

Desde R1 se verifica la tabla de rutas y el estado de las interfaces:

```
R1# show ip route
R1# show ip interface brief
```

Si todos los pings reciben respuesta y las interfaces aparecen en estado *up/up*, la conectividad básica está establecida correctamente.

## Parte 3: Configurar y verificar ACL estándar numeradas y con nombre

**Paso 1. Configurar ACL estándar numerada (ACL 1) en R1**

Se crea la ACL 1 para restringir el acceso al Loopback 0 de R1 (192.168.20.0/24), permitiendo únicamente el tráfico proveniente de la red LAN de R3 (192.168.30.0/24) y denegando el resto. Las ACL estándar se deben aplicar lo más cerca posible del destino (Polanco Sarmiento, 2012).

```
R1(config)# access-list 1 remark Permitir red LAN de R3 hacia R1 Lo0
R1(config)# access-list 1 permit 192.168.30.0 0.0.0.255
R1(config)# access-list 1 deny any
R1(config)# interface loopback 0
R1(config-if)# ip access-group 1 out
R1(config-if)# exit
```

**Paso 2. Verificar la ACL numerada**

Se confirma la ACL creada y su aplicación en la interfaz:

```
R1# show access-lists
R1# show ip interface loopback 0
```

La salida de `show access-lists` debe mostrar la lista de acceso 1 con sus entradas. La salida de `show ip interface loopback 0` debe indicar `Outgoing access list is 1`. Se realizan pruebas: desde PC-C (red 192.168.30.0/24) el ping a 192.168.20.1 debe ser exitoso; desde PC-A el ping a 192.168.20.1 debe fallar.

**Paso 3. Configurar ACL estándar con nombre (BRANCH-OFFICE-POLICY) en R1**

Se crea una ACL con nombre para controlar el acceso por Telnet o SSH (líneas VTY) al router R1, permitiendo la administración remota únicamente desde la red LAN de R3 y desde el loopback de ISP:

```
R1(config)# ip access-list standard BRANCH-OFFICE-POLICY
R1(config-std-nacl)# remark Permitir administracion desde red R3
R1(config-std-nacl)# permit 192.168.30.0 0.0.0.255
R1(config-std-nacl)# remark Permitir acceso desde loopback ISP
R1(config-std-nacl)# permit host 209.165.200.225
R1(config-std-nacl)# remark Denegar cualquier otro origen
R1(config-std-nacl)# deny any
R1(config-std-nacl)# exit
R1(config)# line vty 0 4
R1(config-line)# access-class BRANCH-OFFICE-POLICY in
R1(config-line)# exit
```

**Paso 4. Verificar la ACL con nombre**

```
R1# show access-lists
R1# show running-config | section line vty
```

La salida de `show access-lists` mostrará la ACL BRANCH-OFFICE-POLICY con sus entradas y los contadores de coincidencias. La sección VTY de la configuración confirmará `access-class BRANCH-OFFICE-POLICY in`. Se verifica que desde PC-C se puede abrir sesión Telnet a R1, mientras que desde PC-A la conexión es rechazada.

## Parte 4: Modificar una ACL estándar

**Paso 1. Agregar una nueva entrada a la ACL numerada 1 usando números de secuencia**

Se requiere permitir también el acceso de la red LAN de R1 (192.168.10.0/24) al Loopback 0. Mediante los números de secuencia se inserta la nueva entrada en la posición deseada sin necesidad de eliminar y recrear la ACL completa:

```
R1# show access-lists 1
```

La salida mostrará las entradas actuales con sus números de secuencia (por defecto 10, 20, etc.):

```
Standard IP access list 1
    10 permit 192.168.30.0, wildcard bits 0.0.0.255
    20 deny any
```

Se entra al modo de configuración de la ACL y se inserta una entrada en la secuencia 15, antes de la sentencia `deny any`:

```
R1(config)# ip access-list standard 1
R1(config-std-nacl)# 15 permit 192.168.10.0 0.0.0.255
R1(config-std-nacl)# exit
```

**Paso 2. Verificar la modificación aplicada**

```
R1# show access-lists 1
```

La salida debe reflejar la nueva entrada en la posición correcta:

```
Standard IP access list 1
    10 permit 192.168.30.0, wildcard bits 0.0.0.255
    15 permit 192.168.10.0, wildcard bits 0.0.0.255
    20 deny any
```

Se comprueba el cambio realizando un ping desde PC-A a 192.168.20.1; ahora debe obtener respuesta. La entrada sin borrar ni recrear la ACL demuestra la ventaja de los números de secuencia para modificaciones en producción.

## Análisis final

**¿Por qué tendría la necesidad de usar ACL extendidas?**

Las ACL estándar únicamente filtran el tráfico con base en la dirección IP de origen, lo que limita considerablemente la capacidad de control. Se necesitarían ACL extendidas cuando se requiera un control más preciso y granular del tráfico de red, por ejemplo:

- Permitir a un usuario acceder a un servidor web (puerto TCP 80) pero no a su servidor FTP (puerto TCP 21).
- Bloquear tráfico ICMP (ping) proveniente de una subred específica sin afectar el tráfico HTTP de la misma subred.
- Controlar el tráfico basándose en el protocolo (TCP, UDP, ICMP), la dirección IP de destino y los números de puerto de origen y destino simultáneamente.

En la topología del laboratorio, si se quisiera permitir solo el tráfico HTTP de PC-A hacia el servidor del ISP pero bloquear Telnet, sería imprescindible una ACL extendida, ya que una ACL estándar no puede diferenciar por tipo de servicio (Polanco Sarmiento, 2012).

**¿Por qué elegiría ACL con nombre en vez de ACL numeradas?**

Las ACL con nombre presentan ventajas significativas sobre las numeradas en entornos de producción:

- **Identificación descriptiva:** El nombre indica claramente el propósito de la ACL (por ejemplo, BRANCH-OFFICE-POLICY), facilitando la administración y el diagnóstico en comparación con un número arbitrario como `access-list 1`.
- **Edición por secuencia:** Permiten agregar, eliminar o reordenar entradas individuales sin necesidad de borrar y recrear toda la lista, reduciendo el riesgo operativo.
- **Mejor documentación:** Los comentarios con `remark` y los nombres hacen que la configuración sea más legible en auditorías de seguridad.
- **Sin límite de rangos:** Las ACL numeradas están restringidas a rangos numéricos (1-99 para estándar, 100-199 para extendidas), mientras que los nombres permiten mayor flexibilidad y escalabilidad en redes grandes (Molina, 2015).

**Conclusiones**

1. La implementación de ACL estándar numeradas y con nombre sobre la topología analizada demostró que ambas cumplen la función de filtrado por dirección IP de origen, pero las ACL con nombre ofrecen mayor flexibilidad administrativa al permitir edición de entradas individuales mediante números de secuencia, lo que resulta indispensable en redes en producción donde los cambios deben realizarse con mínima interrupción del servicio.

2. Las ACL estándar, al filtrar únicamente por IP de origen, deben colocarse cerca del destino para minimizar el bloqueo de tráfico legítimo; sin embargo, cuando la política de seguridad exige controlar también protocolo, puertos o dirección destino, se requieren ACL extendidas, cuya ubicación recomendada es cerca del origen del tráfico a filtrar para evitar que paquetes no permitidos circulen innecesariamente por la red.

**Referencias**

Molina, F. (2015). *Redes locales* (pp. 221-248). RA-MA.

Pastrana, J. (2021). *Diseño y estructuración de un sistema unificado a la red LAN de la sede central del Centro de Sistemas de Antioquia (CENSA), aplicando políticas de seguridad ACL* (trabajo de grado, pp. 15-27). Universidad Cooperativa de Colombia, Córdoba.

Polanco Sarmiento, O. (2012). Listas de acceso IP extendidas. En *Laboratorio de redes y comunicaciones* (pp. 136-151). Programa Editorial Universidad del Valle.
