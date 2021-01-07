#!/bin/bash
##############################################################################
# BASICS
##############################################################################

# help
curl -h                 # help
curl --help             # same as -h
curl --manual           # whole man page

# verbose
curl -v                 # verbose
curl -vv                # even more verbose

# redirect output to the file
curl http://url/file > file
# write to file instead of stdout
curl -o file http://url/file
curl --output file http://url/file
# write output to a file named as the remote file
curl -o file http://url/file
curl --output file http://url/file
# execute remote script
bash <(curl -s http://url/myscript.sh)

# download headers
curl -I url             # display header

# basic authentification
curl --user username:password http://example.com/
curl -u username:password http://example.com/

# SSL
# -k, --insecure allow insecure server connections when using SSL
curl -k https://server_with_self_signed_cert/endpoint
curl --insecure https://server_with_self_signed_cert/endpoint

# HTTP request
# -X, --request <command> specify request command to use
# example:
curl -X GET http://url/endpoint

# HTTP header
# -H, --header <header/@file> pass custom header(s) to server
# example:
curl -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' http://url/endpoing

# HTTP POST data
# -d, --data <data>     HTTP POST data
# -d, --data @data      HTTP POST data from file
# example:
curl -d '{json}' -H 'Content-Type: application/json' http://url/endpoint

# config file
curl -K file            #
#or                     # Read config from a file
curl --config file      #
$HOME/.curlrc           # Default config file in UNIX-like systems

##############################################################################
# WRITE OUT PARAMETERS
##############################################################################

# -w, --write-out <format> Use output FORMAT after completion
# example:
curl -w %{size_header} --silent -o /dev/null http://gogle.com # print size of header when you accessing google.com

# FORMAT supported:
# %{content_type}       # shows the Content-Type of the requested document, if there was any.
# %{filename_effective} # shows the ultimate filename that curl writes out to.
                        # This is only meaningful if curl is told to write to a file with
                        # the --remote-name or --output option. It's most useful in combination
                        #  with the --remote-header-name option.
# %{ftp_entry_path}     # shows the initial path curl ended up in when logging on to the remote FTP server.
# %{response_code}      # shows the numerical response code that was found in the last transfer.
# %{http_connect}       # shows the numerical code that was found in the last response (from a proxy)
                        # to a curl CONNECT request.
# %{local_ip}           # shows the IP address of the local end of the most recently done connection—can
                        # be either IPv4 or IPv6
# %{local_port}         # shows the local port number of the most recently made connection
# %{num_connects}       # shows the number of new connects made in the recent transfer.
# %{num_redirects}      # shows the number of redirects that were followed in the request.
# %{redirect_url}       # shows the actual URL a redirect would take you to when an HTTP request
                        # was made without -L to follow redirects.
# %{remote_ip}          # shows the remote IP address of the most recently made connection—can be
                        # either IPv4 or IPv6.
# %{remote_port}        # shows the remote port number of the most recently made connection.
# %{size_download}      # shows the total number of bytes that were downloaded.
# %{size_header}        # shows the total number of bytes of the downloaded headers.
# %{size_request}       # shows the total number of bytes that were sent in the HTTP request.
# %{size_upload}        # shows the total number of bytes that were uploaded.
# %{speed_download}     # shows the average download speed that curl measured for the complete download
                        # in bytes per second.
# %{speed_upload}       # shows the average upload speed that curl measured for the complete upload in
                        # bytes per second.
# %{ssl_verify_result}  # shows the result of the SSL peer certificate verification that was requested.
                        # 0 means the verification was successful.
# %{time_appconnect}    # shows the time, in seconds, it took from the start until the SSL/SSH/etc connect/handshake
                        # to the remote host was completed.
# %{time_connect}       # shows the time, in seconds, it took from the start until the TCP connect to the remote
                        # host (or proxy) was completed.
# %{time_namelookup}    # shows the time, in seconds, it took from the start until the name resolving was completed.
# %{time_pretransfer}   # shows the time, in seconds, it took from the start until the file transfer was just about
                        # to begin. This includes all pre-transfer commands and negotiations that are specific to
                        # the particular protocol(s) involved.
# %{time_redirect}      # shows the time, in seconds, it took for all redirection steps including name lookup, connect,
                        # pre-transfer and transfer before the final transaction was started. time_redirect shows
                        # the complete execution time for multiple redirections.
# %{time_starttransfer} # shows the time, in seconds, it took from the start until the first byte was just about to
                        # be transferred. This includes time_pretransfer and also the time the server needed
                        # to calculate the result.
# %{time_total}         # shows the total time, in seconds, that the full operation lasted. The time will be displayed
                        # with millisecond resolution.
# %{url_effective}      # shows the URL that was fetched last. This is particularly meaningful if you have told curl
                        # to follow Location: headers (with -L)