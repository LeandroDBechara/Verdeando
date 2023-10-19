using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu (fileName ="Worker", menuName ="SO/Worker")]
public class WorkerSO : ScriptableObject
{
    public string workerName;
    public float workerBaseCost;
    public float workerMultCost;
    public float workerPower;
}
