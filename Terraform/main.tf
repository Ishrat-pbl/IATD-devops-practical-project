resource "github_repository" "demo_repo" {
  name        = "lab6-example-terraform-repo"
  description = "My first repo created with terraform"
  visibility  = "public"
}
 