##############################################################################
# KUBERNETES
##############################################################################

##############################################################################
# CLIENT CONFIGURATION
##############################################################################

source <(kubectl completion bash)                                               # Setup autocomplete in bash; bash-completion package should be installed first
kubectl config view                                                             # View Kubernetes config
kubectl config view -o jsonpath='{.users[?(@.name == "k8s")].user.password}'    # View specific config items by json path
kubectl config set-credentials kubeuser/foo.kubernetes.com \                    # Set credentials for foo.kuberntes.com
  --username=kubeuser --password=kubepassword

##############################################################################
# VIEWING, FINDING RESOURCES
##############################################################################

kubectl get services                                                                                        # List all services in the namespace
kubectl get pods -o wide --all-namespaces                                                                   # List all pods in all namespaces in wide format
kubectl get pods -o json                                                                                    # List all pods in json (or yaml) format
kubectl describe nodes my-node                                                                              # Describe resource details (node, pod, svc)
kubectl get services --sort-by=.metadata.name                                                               # List services sorted by name
kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'                                      # List pods sorted by restart count
kubectl rolling-update frontend-v1 -f frontend-v2.json                                                      # Rolling update pods for frontend-v1
kubectl scale --replicas=3 rs/foo                                                                           # Scale a replicaset named 'foo' to 3
kubectl scale --replicas=3 -f foo.yaml                                                                      # Scale a resource specified in "foo.yaml" to 3
for i in 0 1; do kubectl exec foo-$i -- sh -c 'echo $(hostname) > /usr/share/nginx/html/index.html'; done   # Execute a command in every pod / replica

##############################################################################
# MANAGE RESOURCES
##############################################################################

kubectl explain pods,svc                    # Get documentation for pod or service
kubectl create -f ./my-manifest.yaml        # Create resource(s) like pods, services or daemonsets
kubectl apply -f ./my-manifest.yaml         # Apply a configuration to a resource
kubectl run nginx --image=nginx             # Start a single instance of Nginx
cat <<EOF | kubectl create -f -
apiVersion: v1
kind: Secret
metadata:
 name: mysecret
type: Opaque
data:
 password: $(echo "s33msi4" | base64)
 username: $(echo "jane"| base64)
EOF                                         # Create a secret with several keys
kubectl delete -f ./my-manifest.yaml        # Delete a resource

##############################################################################
# MONITORING & LOGGING
##############################################################################

kubectl create -f deploy/kube-config/standalone/  # Deploy Heapster from Github repository
kubectl top node                                  # Show metrics for nodes
kubectl top pod                                   # Show metrics for pods
kubectl top pod pod_name --containers             # Show metrics for a given pod and its containers
kubectl logs pod_name                             # Dump pod logs (stdout)
kubectl logs -f pod_name -c my-container          # Stream pod container logs (stdout, multi-container case)
