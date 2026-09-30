# Kubernetes Commands Cheat Sheet

A comprehensive Kubernetes (k8s) cheat sheet covering common commands, concepts, and configurations.

## Table of Contents
- [Basic Commands](#basic-commands)
- [Pods](#pods)
- [Deployments](#deployments)
- [Services](#services)
- [ConfigMaps & Secrets](#configmaps--secrets)
- [Namespaces](#namespaces)
- [Volumes & Persistent Volumes](#volumes--persistent-volumes)
- [Logging & Debugging](#logging--debugging)
- [Helm](#helm)
- [Networking](#networking)
- [RBAC (Role-Based Access Control)](#rbac-role-based-access-control)
- [Miscellaneous](#miscellaneous)

---

## Basic Commands
| Command | Description |
|---------|-------------|
| `kubectl version --client` | Check Kubernetes version |
| `kubectl cluster-info` | Get cluster information |
| `kubectl get nodes` | List all nodes |
| `kubectl describe node <node-name>` | Get detailed node information |
| `kubectl get componentstatuses` | View system component statuses |

## Pods
| Command | Description |
|---------|-------------|
| `kubectl get pods` | List all pods |
| `kubectl describe pod <pod-name>` | Get pod details |
| `kubectl apply -f pod.yaml` | Create a pod from YAML |
| `kubectl delete pod <pod-name>` | Delete a pod |
| `kubectl exec -it <pod-name> -- /bin/sh` | Execute a command inside a pod |

## Deployments
| Command | Description |
|---------|-------------|
| `kubectl get deployments` | List all deployments |
| `kubectl describe deployment <deployment-name>` | Describe a deployment |
| `kubectl scale deployment <deployment-name> --replicas=3` | Scale a deployment |
| `kubectl rollout undo deployment <deployment-name>` | Rollback a deployment |

## Services
| Command | Description |
|---------|-------------|
| `kubectl get services` | List all services |
| `kubectl describe service <service-name>` | Describe a service |
| `kubectl expose deployment <deployment-name> --type=LoadBalancer --port=80` | Expose a deployment as a service |

## ConfigMaps & Secrets
| Command | Description |
|---------|-------------|
| `kubectl create configmap <name> --from-literal=key=value` | Create a ConfigMap |
| `kubectl get configmaps` | List all ConfigMaps |
| `kubectl create secret generic <name> --from-literal=password=secret` | Create a Secret |
| `kubectl get secrets` | List all Secrets |

## Namespaces
| Command | Description |
|---------|-------------|
| `kubectl get namespaces` | List all namespaces |
| `kubectl create namespace <namespace-name>` | Create a new namespace |
| `kubectl delete namespace <namespace-name>` | Delete a namespace |

## Volumes & Persistent Volumes
| Command | Description |
|---------|-------------|
| `kubectl get pv` | List persistent volumes |
| `kubectl get pvc` | List persistent volume claims |
| `kubectl describe pv <pv-name>` | Describe a persistent volume |

## Logging & Debugging
| Command | Description |
|---------|-------------|
| `kubectl logs <pod-name>` | View logs of a pod |
| `kubectl logs <pod-name> -c <container-name>` | View logs of a container within a pod |
| `kubectl describe pod <pod-name>` | Debug a failing pod |

## Helm
| Command | Description |
|---------|-------------|
| `helm install <release-name> <chart-name>` | Install Helm chart |
| `helm list` | List installed Helm releases |
| `helm uninstall <release-name>` | Uninstall a Helm release |

## Networking
| Command | Description |
|---------|-------------|
| `kubectl get services` | List all services |
| `kubectl get ingress` | List all ingress resources |
| `kubectl describe ingress <ingress-name>` | Describe an ingress resource |
| `kubectl get networkpolicy` | List all network policies |

## RBAC (Role-Based Access Control)
| Command | Description |
|---------|-------------|
| `kubectl get roles` | List all roles |
| `kubectl get rolebindings` | List all role bindings |
| `kubectl get clusterroles` | List all cluster roles |
| `kubectl get clusterrolebindings` | List all cluster role bindings |
| `kubectl describe role <role-name>` | Describe a specific role |

## Miscellaneous
| Command | Description |
|---------|-------------|
| `kubectl apply -f <file.yaml>` | Apply configuration from a YAML file |
| `kubectl delete -f <file.yaml>` | Delete resources using a YAML file |
| `kubectl api-resources` | Get API resources |

---

