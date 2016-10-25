#pragma strict
public var expl : GameObject;

function Start () {

}

function onTriggerEnter2D (other : Collider2D)
 {
 var newPos : Vector3 = new Vector3(gameObject.transform.position.x, gameObject.transform.position.y, 0); 
 Instantiate(expl, newPos, Quaternion.identity);
 Destroy(gameObject);
}


