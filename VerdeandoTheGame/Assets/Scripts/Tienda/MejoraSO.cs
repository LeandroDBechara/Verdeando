using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Mejora", menuName = "SO/Mejora")]
public class MejoraSO : ScriptableObject
{
    public string mejoraName; //nombre
    public float mejoraBaseCost; //costo base de compra
    public float mejoraMultCost; //aumenta el costo caada que sube de nivel
    public float mejoraPower; //cantidad de monedas que da
    public float mejoraTime;//tiempo que tarda en dar monedas
    public Sprite mejoraImage;
    public int costocompra;
    public string Clave; //identifica con el worker
}
