##############################################################################
# SNORT SNIFFER MODE
##############################################################################


snort -v                                        # Verbose mode
snort -e                                        # Display the link layer headers
snort -d                                        # Display data payload
snort -X                                        # Display full packet details (HEX)
snort -eX                                       # Display all packet details
snort -v -n 10                                  # Sniff 'N' number of packets


##############################################################################
# SNORT LOGGER MODE
##############################################################################


Log path is /var/log/snort

snort -v -l /home/user/Desktop                  # Use another log path
snort-v -K ASCII                                # Log in the ASCII format
snort -v -r snort.log                           # Read from snort files
snort -v -r snort.log -n 10                     # Read 10 packets from snort files
snort -v -r snort.log tcp                       # Filter packets for TCP
snort -v -r snort.log ‘udp and port 53’         # Filter packets for DNS (UDP:53)


##############################################################################
# SNORT PCAP
##############################################################################


snort -c /etc/snort/snort.conf -q -r example.pcap -A console                                            # Processing one PCAP file   
snort -c /etc/snort/snort.conf -q --pcap-list= "example1.pcap example2.pcap" -A console                 # Processing some PCAP files
snort -c /etc/snort/snort.conf -q --pcap-dir=/home/whereyourpcapis -A console                           # Processing some PCAP files from a folder
snort -c /etc/snort/snort.conf -q --pcap-list="example1.pcap example2.pcap" -A console --pcap-show      # Result the processed PCAP files


##############################################################################
# SNORT IDS - IPS MODE
##############################################################################


snort -c /etc/snort/snort.conf                             # Use configuration file
snort -c /etc/snort/snort.conf -T                          # Test instance and configuration file
snort -c /etc/snort/snort.conf -N                          # Disable logging
snort -c /etc/snort/snort.conf -D                          # Run snort in background
snort -c /etc/snort/snort.conf -v -A none                  # Alerting in mode "No output"
snort -c /etc/snort/snort.conf -v -A console               # Alerting in mode "Output console"
snort -c /etc/snort/snort.conf -v -A fast                  # Alerting in mode "Output file resumed"
snort -c /etc/snort/snort.conf -v -A full                  # Alerting in mode "Output file complete"
snort -c /etc/snort/rules/local.rules -v -A console        # Alerting without config file