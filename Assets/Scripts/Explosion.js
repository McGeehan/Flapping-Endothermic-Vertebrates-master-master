#pragma strict

function Start () {
	Invoke("KillMe", 8);
}

function KillMe () {
Destroy(gameObject);
}