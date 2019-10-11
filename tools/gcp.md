# GCLOUD SDK AND TOOLBELT CHEATSHEET

## GCP BASICS

- `Check Version and Settings`: gcloud version, gcloud info, gcloud components list

- `Init Profile`: gcloud init This will ask you to open an OpenID URL

- `List all zones`: gcloud compute zones list

- `Upgrade local SDK`: gcloud components update, gcloud components update --version 219.0.1


## BUCKET BASICS

- `List all buckets and files`: gsutil ls, gsutil ls -lh gs://<bucket-name>

- `Download file`: gsutil cp gs://<bucket-name>/<dir-path>/package-1.1.tgz .

- `Upload file`: gsutil cp <filename> gs://<bucket-name>/<directory>/

- `Cat file`: gsutil cat gs://<bucket-name>/<filepath>/

- `Delete file`: gsutil rm gs://<bucket-name>/<filepath>

- `Move file`: gsutil mv <src-filepath> gs://<bucket-name>/<directory>/<dest-filepath>

- `Copy folder`: gsutil cp -r ./conf gs://<bucket-name>/

- `Show disk usage`: gsutil du -h gs://<bucket-name>/<directory>/
 
- `Create bucket`: gsutil mb gs://<bucket-name>

- `Caculate file sha1sum`: gsha1sum syslog-migration-10.0.2.tgz, shasum syslog-migration-10.0.2.tgz

- `Gsutil help`: gsutil help, gsutil help cp, gsutil help options


## GCP PROJECT

- `List projects `: gcloud config list, gcloud config list project

- `Show project info `: gcloud compute project-info describe

- `Switch project `: gcloud config set project <project-id>


## GKE

- `Display a list of credentialed accounts `: gcloud auth list

- `Set the active account `: gcloud config set account <ACCOUNT>

- `Set kubectl context `: gcloud container clusters get-credentials <cluster-name>

- `Change region `: gcloud config set compute/region us-west

- `Change zone `: gcloud config set compute/zone us-west1-b

- `List all container clusters `: gcloud container clusters list


## IAM

- `Authenticate client `: gcloud auth activate-service-account --key-file <key-file>

- `Display a list of credentialed accounts `: gcloud auth list

- `Set the active account `: gcloud config set account <ACCOUNT>

- `Auth to GCP Container Registry `: gcloud auth configure-docker

- `Print token for active account `: gcloud auth print-access-token, gcloud auth print-refresh-token

- `Revoke previous generated credential `: gcloud auth <application-default> revoke


## BUCKET SECURITY

- `Make all files readable `: gsutil -m acl set -R -a public-read gs://<bucket-name>/

- `Config auth `: gsutil config -a

- `Grant bucket access `: gsutil iam ch user:denny@gmail.com:objectCreator,objectViewer gs://<bucket-name>

- `Remove bucket access `: gsutil iam ch -d user:denny@gmail.com:objectCreator,objectViewer gs://<bucket-name>


## VM

- `List all instances `: gcloud compute instances list, gcloud compute instance-templates list

- `Show instance info `: gcloud compute instances describe "<instance-name>" --project "<project-name>" --zone "us-west2-a"

- `Stop an instance `: gcloud compute instances stop instance-2

- `Start an instance `: gcloud compute instances start instance-2

- `Create an instance `: gcloud compute instances create vm1 --image image-1 --tags test --zone "<zone>" --machine-type f1-micro

- `SSH to instance `: gcloud compute ssh --project "<project-name>" --zone "<zone-name>" "<instance-name>"

- `Download files `: gcloud compute copy-files example-instance:~/REMOTE-DIR ~/LOCAL-DIR --zone us-central1-a

- `Upload files `: gcloud compute copy-files ~/LOCAL-FILE-1 example-instance:~/REMOTE-DIR --zone us-central1-a


## DISKS & VOLUMES

- `List all disks `: gcloud compute disks list

- `List all disk types `: gcloud compute disk-types list

- `List all snapshots `: gcloud compute snapshots list

- `Create snapshot `: gcloud compute disks snapshot <diskname> --snapshotname <name1> --zone $zone


## NETWORK

- `List all networks `: gcloud compute networks list

- `Detail of one network `: gcloud compute networks describe <network-name> --format json

- `Create network `: gcloud compute networks create <network-name>

- `Create subnet `: gcloud compute networks subnets create subnet1 --network net1 --range 10.5.4.0/24

- `Get a static ip `: gcloud compute addresses create --region us-west2-a vpn-1-static-ip 

- `List all ip addresses `: gcloud compute addresses list

- `Describe ip address `: gcloud compute addresses describe <ip-name> --region us-central1

- `List all routes `: gcloud compute routes list


## DNS

- `List of all record-sets in my zone `: gcloud dns record-sets list --zone my_zone

- `List first 10 DNS records `: gcloud dns record-sets list --zone my_zone --limit=10


## FIREWALL

- `List all firewall rules `: gcloud compute firewall-rules list

- `List all forwarding rules `: gcloud compute forwarding-rules list

- `Describe one firewall rule `: gcloud compute firewall-rules describe <rule-name>

- `Create one firewall rule `: gcloud compute firewall-rules create my-rule --network default --allow tcp:9200 tcp:3306

- `Update one firewall rule `: gcloud compute firewall-rules update default --network default --allow tcp:9200 tcp:9300


## IMAGES & CONTAINERS

- `List all images `: gcloud compute images list

- `List all container clusters `: gcloud container clusters list

- `Set kubectl context `: gcloud container clusters get-credentials <cluster-name>


## RDS

- `List all sql instances `: gcloud sql instances list


## SERVICES

- `List my backend services `: gcloud compute backend-services list

- `List all my health check endpoints `: gcloud compute http-health-checks list

- `List all URL maps `: gcloud compute url-maps list
