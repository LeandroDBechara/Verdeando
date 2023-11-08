using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[CreateAssetMenu (fileName ="Worker", menuName ="SO/Worker")]
public class WorkerSO : ScriptableObject
{
    public int level;
    public string workerName; //nombre
    public float workerBaseCost; //costo base de compra
    public float workerMultCost; //aumenta el costo caada que sube de nivel
    public float workerPower; //cantidad de monedas que da
    public float workerTime;//tiempo que tarda en dar monedas
    public Sprite workerImage;
    public string Clave; //identifica con las mejoras
}
