## Automating machine setup with Ansible and Ansible Vault
- ThePrimeagen built a setup that takes a fresh computer to a working dev environment with one Ansible command, run in a clean Docker container as the demo.
- His playbook run: `ansible-playbook` with the `dotfiles` tag, `--ask-vault-pass`, and `local.yaml`. It ensures SSH is installed, installs oh-my-zsh and Vim Plug, installs Stow, clones his dotfiles repo, pulls submodules recursively, stows the dotfiles, and clones personal projects.
- After the run he opens Neovim, runs `:PlugInstall`, and his keyboard shortcuts and config work as before.
- Tagging tasks (for example `dotfiles`, `ssh`) means installing the dotfiles also installs the SSH key tasks they depend on.
- He copy-pasted the SSH key playbook from the internet and it worked first try. It defines variables for the current key location and destination, creates the `.ssh` directory with permissions 700, copies the source key to the destination, and sets the authorized key.
- Result: git operations work immediately, including cloning a public repo and then updating private submodules with the decrypted key.

## Using Ansible Vault to store SSH keys safely
- ThePrimeagen's pain point: SSH keys are annoying because on each new machine you generate a new one and re-add it to GitHub, Stash, Bitbucket, GitLab and elsewhere. He also doesn't want to lose keys or keep them somewhere hackable.
- Ansible Vault encrypts a file with a password: `ansible-vault encrypt <file>`, then enter and confirm a password ("encryption successful").
- The encrypted file can be committed to a public repo. He notes AES-256 is said to be likely quantum secure, so it should hold up for a good while.
- To read it back: `ansible-vault decrypt <file>` with the password, then `cat` shows the original contents. It is two-way encryption.
- The manual decrypt-and-move step is what the playbook automates, so keys land in the right place during setup.
- He calls this one of the best solutions he has seen for getting a system running with private keys quickly, and one of Ansible's biggest selling points.

## Storing backup codes and other secrets in the vault
- ThePrimeagen asks what else Vault can hold besides SSH keys, and answers: 2FA backup codes. He gives Discord backup codes as his example.
- His reasoning: if you lose your phone or get locked out (he jokes about being locked out of Binance with no backup codes), you only need a computer with Ansible installed to recover them.
- He says this took the Ansible section "from the most boring section to the most awesome section", because it fixes a problem that burned him many times.
- Takeaway: keep recovery codes encrypted in a repo you control, so they are secure but never lost.

## Tmux session switching and reading the manual
- Goal: navigate instantly to the project folders you actually care about (Git projects or folders at each directory level, not deep `node_modules` paths) and filter them with a fuzzy finder (fzf).
- Fuzzy finding is like Ctrl+P in VS Code: type a partial match and get sorted results.
- Tmux building blocks he uses: create a detached, named session with a starting directory (`-c`), create a new window with a directory, and `tmux switch-client -t <session name>` to jump sessions programmatically. The `-t` target can also include window name and pane number, so well-named sessions and windows could be fuzzy-found too. He usually uses just the session name.
- You can also give a command to run in a new window or session.
- He repeatedly says to RTFM: `man tmux` documents every option, aliases and flags. `man man` explains how to read manual pages, such as bold meaning "type it exactly as shown". He finds manual pages "very, very nice" and thinks tmux's is particularly complete.

## Building a tmux and fzf cheat-sheet script
- He pipes a list of folders into fzf to pick a target, then uses tmux to switch there.
- For the cheat sheet script (using cheat.sh via curl), he separates two lists: programming languages (space-delimited) and core utils (not space-delimited).
- To test membership he uses `echo "$languages" | grep -qs <selected>`, where `-q` makes grep silent and only the exit status matters.
- Query handling: `read -p "give me your query"` into a `query` variable, then `echo $query | tr ' ' '+'` to turn spaces into plus signs. The final request is `curl cheat.sh/<selected>/<query>`, and for core utils the request has no query part.
- Tested with a language (`typescript`, query `exec`) and a core util, and confirmed it works.
- His bash workflow: he says he never gets bash right first time, so he goes back and forth between the script and the terminal, testing small pieces (for example `echo ... | grep`) as he writes.

## Showing results in a tmux split pane
- To make the script feel more "tmux'd", he considers a new pane or window. He tries a split pane, which he had never done before.
- `tmux split-window` takes an optional target, a shell command, a starting directory, and environment variables. He notes env vars could start a database environment with connections preconfigured.
- Horizontal split is `-h` and vertical is `-v`; he notes tmux's naming feels backwards to him.
- He runs the curl command through `bash -c` and pipes the output into `less`, so the cheat sheet appears in a split pane you can scroll.
- Quitting `less` with `q` closes the split and returns to the original pane, which he calls "a pretty good experience".
