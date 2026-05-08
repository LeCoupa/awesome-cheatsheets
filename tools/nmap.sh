##############################################################################
# NMAP TARGET DEFINITION  
##############################################################################

nmap 10.10.10.1	                            # Scan one IP
nmap 10.10.10.1 10.10.10.2	                # Scan multiple IPs
nmap 10.10.10.10-254	                    # Scan an IP range
nmap domain.example.com	                    # Scan a domain
nmap 192.168.1.0/24	                        # Scan using CIDR 
nmap -iL list.txt	                        # Scan targets from the file list.txt
nmap -iR 10	                                # Scan 10 hosts randomly
nmap –exclude 10.10.10.1	                # Scan but exclude one IP


##############################################################################
# NMAP SCANNING MODES  
##############################################################################


nmap 10.10.10.1 -sS	                        # TCP SYN port scan                                         
nmap 10.10.10.1 -sT	                        # TCP connect port scan
nmap 10.10.10.1 -sU	                        # UDP scan
nmap 10.10.10.1 -sA	                        # TCP ACK port scan
nmap 10.10.10.1 -sW	                        # TCP Window port scan


##############################################################################
# NMAP HOST SCAN  
##############################################################################


nmap 10.10.10.1-3 -sL	                    # List targets only
nmap 10.10.10.1/24 -sn	                    # Host discovery only.
nmap 10.10.10.1-5 -Pn	                    # Port scan only.
nmap 10.10.10.1-5 -PS22-25,80	            # TCP SYN discovery on port 22 to 25 and 80.
nmap 10.10.10.1-5 -PA22,443	                # TCP ACK discovery on port 22 and 443.
nmap 10.10.10.1-5 -PU53	                    # UDP discovery on port 53.
nmap 10.10.10.1-1/24 -PR	                # ARP discovery
nmap 10.10.10.1 -n	                        # No DNS resolution


##############################################################################
# NMAP PORT SCAN  
##############################################################################


nmap 10.10.10.1 -p 22	                    # Scan port 22
nmap 10.10.10.1 -p 22-80	                # Scan a port range
nmap 10.10.10.1 -p U:53,T:22-25,80	        # Scan multiple ports UDP and TCP
nmap 10.10.10.1 -p-	                        # Scan all ports 
nmap 10.10.10.1 -p http,https	            # Scan ports based on service name
nmap 10.10.10.1 -F	                        # Scan quickly 100 common ports 
nmap 10.10.10.1 –top-ports 1000	            # Scan the top 1000 ports


##############################################################################
# NMAP DETECTION
##############################################################################


nmap 10.10.10.1 -sV	                        # Attempts to determine the version of the service running on port
nmap 10.10.10.1 -sV –version-intensity 8	# Intensity level 0 to 9. Higher number increases possibility of correctness
nmap 10.10.10.1 -sV –version-light	        # Enable light mode. Lower possibility of correctness. Faster
nmap 10.10.10.1 -sV –version-all	        # Enable intensity level 9. Higher possibility of correctness. Slower
nmap 10.10.10.1 -A	                        # Enables OS detection, version detection, script scanning, and traceroute
nmap 10.10.10.1 -O	                        # Remote OS detection using TCP/IP stack fingerprinting
nmap 10.10.10.1 -O –osscan-limit	        # If at least one open and one closed TCP port are not found it will not try OS detection against host
nmap 10.10.10.1 -O –osscan-guess	        # Makes Nmap guess more aggressively
nmap 10.10.10.1 -O –max-os-tries 1	        # Set the maximum number x of OS detection tries against a target
nmap 10.10.10.1 -A	                        # Enables OS detection, version detection, script scanning, and traceroute


##############################################################################
# NMAP EVASION
##############################################################################


nmap 10.10.10.1 -T0	                            # Paranoid (0) Intrusion Detection System evasion
nmap 10.10.10.1 -T1	                            # Sneaky (1) Intrusion Detection System evasion
nmap 10.10.10.1 -T2	                            # Polite (2) Slows down the scan to use less bandwidth and use less target machine resources
nmap 10.10.10.1 -T3	                            # Normal (3) Default speed
nmap 10.10.10.1 -T4	                            # Aggressive (4) Speeds scans
nmap 10.10.10.1 -T5	                            # Insane (5) Extra Speeds scan
nmap 10.10.10.1 -f	                            # Requested scan (including ping scans) use tiny fragmented IP packets. Harder for packet filters
nmap 10.10.10.1 –mtu 32	                        # Set your own offset size
nmap -D 10.10.10.1,10.10.10.2	                # Send scans from multiple IPs
nmap -S www.github.com 	                        # Scan Github (-e eth0 -Pn may be required)
nmap -g 53 10.10.10.1	                        # Use given source port number
nmap –proxies http://myproxy:80 10.10.10.1	    # Relay connections through HTTP/SOCKS4 proxies


##############################################################################
# NMAP SCRIPTS
##############################################################################


nmap 10.10.10.1 –script default	                # Scan with default NSE scripts. 
nmap 10.10.10.1 –script=banner	                # Scan with a single script banner
nmap 10.10.10.1 –script=http*	                # Scan with a wildcard http
nmap 10.10.10.1 –script=http,banner	            # Scan with two scripts http and banner
nmap 10.10.10.1 –script “not intrusive”	        # Scan default, but without intrusive scripts


##############################################################################
# NMAP OUTPUT
##############################################################################


nmap 10.10.10.1 -oN nmap.file	                # Normal output to the file nmap.file
nmap 10.10.10.1 -oX nmap.file	                # XML output to the file nmap.file
nmap 10.10.10.1 -oG nmap.file	                # Grepable output to the file nmap.file
nmap 10.10.10.1 -oA results	                    # Output in the three major formats at once
nmap 10.10.10.1 -oG –	                        # Grepable output to screen. -oN  
nmap 10.10.10.1 -oN nmap.file –append-output	# Append a scan to a previous scan file
nmap 10.10.10.1 -v	                            # Increase the verbosity level 
nmap 10.10.10.1 -vv	                            # Increase more the verbosity level 
nmap 10.10.10.1 -d	                            # Increase debugging level 
nmap 10.10.10.1 –reason	                        # Display the reason a port is in a particular state
nmap 10.10.10.1 –open	                        # Only show open ports
nmap 10.10.10.1 -T4 –packet-trace	            # Show all packets sent and received
nmap –iflist	                                # Shows the host interfaces and routes
nmap –resume nmap.file	                        # Resume scanning