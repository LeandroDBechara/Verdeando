using System.CodeDom.Compiler;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EventoUI : MonoBehaviour
{
    public Button botonEventoDisp;
    public int id;

    public void Abrir()
    {
        TableroControler.instance.Linker(id);
    }
}
